import React, { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getSkills, deleteSkill } from "./helper/adminapicall";

const ManageSkill = () => {
  const [skills, setSkills] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getSkills().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSkills(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisSkill = skillId => {
    deleteSkill(skillId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <>
      <h2 className="mb-4">All Skills:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-black my-3">All Skills</h2>

          {skills.map((skill, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-black text-left">{skill.name}</h3>
                  <h3 className="text-black text-left">{skill.stats}</h3>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/skill/update/${skill._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisSkill(skill._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
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

export default ManageSkill;
