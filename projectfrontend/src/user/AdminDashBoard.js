import React from "react";

import { isAutheticated , signout } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = ({history}) => {
  const {
    user: { name, email, role }
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/skill" className="nav-link text-success">
              Create Skill
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/education" className="nav-link text-success">
              Create education
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/project" className="nav-link text-success">
              Create Project
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/skills" className="nav-link text-success">
              Manage Skills
            </Link>
          </li>
         
          <li className="list-group-item">
            <Link to="/admin/projects" className="nav-link text-success">
              Manage Projects
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/education" className="nav-link text-success">
              Manage Education
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>
          {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>)}
          <li className="list-group-item">
            <span className="badge badge-danger">Admin Area</span>
          </li>
        </ul>
        {isAutheticated() && (
        
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
       )}
      </div>
    );
  };
  return (
    <>
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </>
  );
};

export default AdminDashBoard;
