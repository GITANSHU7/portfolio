import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getProjects, deleteProject , updateProject } from "./helper/adminapicall";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getProjects().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProjects(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProject = projectId => {
    deleteProject(projectId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  
  const updateThisProject = projectId => {
    updateProject(projectId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };


  return (
    <>
      <h2 className="mb-4">All projects:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total 3 projects</h2>

          {projects.map((project, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{project.name} </h3>
                  <button>{project.description}</button>
                  <button>{project.github_link}</button>
                  <button>{project.project_link}</button>
                  <img src = {project.image} />
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/project/update/${project._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisProject(project._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      updateThisProject(project._id);
                    }}
                    className="btn btn-danger"
                  >
                    update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ManageProjects;
