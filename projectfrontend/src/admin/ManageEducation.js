import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";

import { getAlleducation, deleteEducation } from "./helper/adminapicall";

const ManageEducation = () => {
  const [educations, setEducations] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAlleducation().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEducations(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisEducation = educationId => {
    deleteEducation(educationId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };


{/*
  const updateThisEducation = EducationId => {
    updateEducation(EducationId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };*/}

  return (
    <>
      <h2 className="mb-4">All Educations:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-black my-3">All Educations</h2>

          {educations.map((education, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h4>{education.name}</h4>
                  <h4>{education.year}</h4>
                  <h4>{education.board}</h4>
                  <h4>{education.qualification}</h4>
                
                  </div>
                <div className="col-4">
                <Link
                    className="btn btn-success"
                    to={`/admin/education/update/${education._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisEducation(education._id);
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

export default ManageEducation;
