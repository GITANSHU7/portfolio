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
    <div className="wrapper">
        <div className="form-wrapper">
          <h1>Add Project</h1>
          <form>
		  <div className="Post">
              <label htmlFor="name">Add Photo</label>
              <input
                placeholder="Enter Your School/College Name"
                type="file"
                name="photo"
                onChange={handleChange("photo")}
              />
              
            </div>

		 <div className="name">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter Your School/College Name"
            type="name"
            name="name"
            onChange={handleChange("name")}
            value={name}
          />
          
        </div>
            <div className="description">
              <label htmlFor="description">Description</label>
              <input
                placeholder="Enter Your Description"
                type="description"
                name="description"
                onChange={handleChange("description")}
                value={description}
              />
              
            </div>

		<div className="tech">
              <label htmlFor="tech">Tech Stack</label>
              <input
                placeholder="Tech Stack"
                type="tech_stack"
                name="tech_stack"
                onChange={handleChange("tech_stack")}
                value={tech_stack}
              />
              
            </div>
            
             <div className="github">
              <label htmlFor="github">Github</label>
              <input
                placeholder="Enter Your Github Link"
                type="github_link"
                name="github_link"
                onChange={handleChange("github_link")}
                value={github_link}
              />
              
           
            
            </div>
		<div className="project">
              <label htmlFor="project">Project Link</label>
              <input
                placeholder="Enter Your Project Link"
                type="project_link"
                name="project_link"
                onChange={handleChange("project_link")}
                value={project_link}
              />
              
           
            
            </div>
            <div className="createAccount">
              <button type="submit" className= "btun" onClick={onSubmit} >Create</button>
           <br />
              <span class="w3-tag w3-#F9B208"  ><Link to = "/admin/dashboard">Admin Home</Link></span>
            </div>
          </form>
        </div>
      </div>
  );

  return (
    <>
     
      
          {successMessage()}
          {createProjectForm()}
      
    </>
  );
};

export default AddProject;
