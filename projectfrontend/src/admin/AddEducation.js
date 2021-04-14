import React, { useState } from "react";

import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createEducation } from "./helper/adminapicall";

const AddEducation = () => {
  const [values, setValues] = useState({
    name: "",
    year : "",
    board : "",
    qualification: "",
    error: "",
    success: false
  });

  const { user, token } = isAutheticated();
  const { name, board, year, qualification, error, success } = values;

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    //setError("");
    //setSuccess(false);
    setValues({ ...values, error: false });
    //backend request fired
    createEducation(user._id, token, { name  , year ,qualification ,board}).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          board: "",
          qualification: "",
          year : "",
          error: "",
          success: true
        });
      }
    })
    .catch(console.log("Error in create education"));
};
{/*
  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category created successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to create category</h4>;
    }
  };
*/}
  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the Education Details</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("name")}
          value={name}
          autoFocus
          required
          placeholder="Institute Name"
        />
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("year")}
          value={year}
          autoFocus
          required
          placeholder="PassingYear"
        />
        
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("board")}
          value={board}
          autoFocus
          required
          placeholder="Board"
        />
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("qualification")}
          value={qualification}
          autoFocus
          required
          placeholder="Qualification"
        />
        
        <button onClick={onSubmit} className="btn btn-outline-info">
          Create Education Details
        </button>
      </div>
    </form>
  );

  
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Created Successfully
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
        {successMessage()}
      {errorMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </>
  );
};

export default AddEducation;
