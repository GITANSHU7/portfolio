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
    <div className="wrapper">
    <div className="form-wrapper">
      <h1>Add Education</h1>
      <form>
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
        <div className="year">
          <label htmlFor="email">Year</label>
          <input
            placeholder="Enter Your Passing Year"
            type="number"
            name="year"
            onChange={handleChange("year")}
            value={year}
          />
          
        </div>

<div className="board">
          <label htmlFor="email">board</label>
          <input
            placeholder="Board"
            type="text"
            name="board"
            onChange={handleChange("board")}
            value={board}
          />
          
        </div>
        
         <div className="qualification">
          <label htmlFor="email">Qualification</label>
          <input
            placeholder="Enter Your Qualification"
            type="qualification"
            name="qualification"
            onChange={handleChange("qualification")}
            value={qualification}
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
     
        {successMessage()}
      {errorMessage()}
          {myCategoryForm()}
          {/*{goBack()}*/}
       
    </>
  );
};

export default AddEducation;
