import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { getSkills, createaProject } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const AddProject = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    tech_stack: "",
    github_link: "",
    photo: "",
    project_link: "",
    skill: "",
    loading: false,
    error: "",
    createdProject: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name,
    description,
    tech_stack,
    github_link,
    project_link,
    skill,
    loading,
    error,
    createdProject,
    getaRedirect,
    formData
  } = values;

  const preload = () => {
    getSkills().then(data => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, skills: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createaProject(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          tech_stack: "",
          photo: "",
          github_link: "",
          project_link : "",
          loading: false,
          createdProject: data.name
        });
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProject ? "" : "none" }}
    >
      <h4>{createdProject} created successfully</h4>
    </div>
  );

  const createProjectForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("tech_stack")}
          type="text"
          className="form-control"
          placeholder="tech_stack"
          value={tech_stack}
        />
      </div>
     {/* <div className="form-group">
        <select
          onChange={handleChange("skill")}
          className="form-control"
          placeholder="skill"
        >
          <option>Select</option>
          {skills &&
            skills.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
            </div> */}
      <div className="form-group">
        <input
          onChange={handleChange("github_link")}
          type="text"
          className="form-control"
          placeholder="github_link"
          value={github_link}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("project_link")}
          type="text"
          className="form-control"
          placeholder="project_link"
          value={project_link}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Project
      </button>
    </form>
  );

  return (
    <>
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProjectForm()}
        </div>
      </div>
    </>
  );
};

export default AddProject;
