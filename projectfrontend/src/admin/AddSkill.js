import React, { useState } from "react";
import Tittle from "../components/Titlte";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createSkill } from "./helper/adminapicall";

const AddSkill = () => {
  const [values, setValues] = useState({
    name: "",
    stats : "",
    error: "",
    success: false
  });

  const { user, token } = isAutheticated();
  const { name, stats, error, success } = values;

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
    createSkill(user._id, token, { name  , stats }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          stats: "",
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
      return <h4 className="text-success">Skill created successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to create Skill</h4>;
    }
  };
*/}
  const myCategoryForm = () => (
    <div>
      <Tittle title={'Add Skill'} span={'Skill'} />
      <br />
      <br />
    <div className="wrapper">

    <div className="form-wrapper">
     
      <h1>ADD SKILL</h1>
      <form>
        <div className="name">
          <label htmlFor="name">Skill's Name</label>
          <input
            placeholder="name"
            type="name"
            name="name"
            onChange={handleChange("name")}
            value={name}
          />
          
        </div>
        <div className="stats">
          <label htmlFor="stats">Add Stats</label>
          <input
             onChange={handleChange("stats")}
            value={stats}
            placeholder="stats"
            type="stats"
            name="stats"
           
          />
         
        </div>
        <div className="createAccount">
          <button type="submit" onClick={onSubmit} >ADD</button>
          <span class="w3-tag w3-#F9B208"  ><Link to = "/admin/dashboard">Admin Home</Link></span>
      
        
       
        </div>
      </form>
    </div>
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

export default AddSkill;
 