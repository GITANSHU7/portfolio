import React, { useState, useEffect } from "react";
import Tittle from "../components/Titlte";
import { isAutheticated, signout } from "../auth/helper";
import { Link } from "react-router-dom";
import SkillsSection from "../components/SkillsSection";
import { getEducation, updateEducation } from "./helper/adminapicall";

const UpdateEducation = ({ match  , history}) => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
   name: "",
    qualification: "",
    board: "",
    year: "",
    loading: false,
    error: "",
    createdEducation: "",
    getaRedirect: false,
    
  });

   const {
    name,
    qualification,
    board,
    year,
    loading,
    error,
    createdEducation,
    getaRedirect,
    formData
  } = values;


  const preload = educationId => {
    getEducation(educationId).then(data => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        
        setValues({
          ...values,
          name: data.name,
          qualification: data.qualification,
    board: data.board,
    year: data.year,
          
        });
      }
    });
  };

  
  useEffect(() => {
    preload(match.params.educationId);
  }, []);

  
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateEducation(match.params.educationId, user._id, token , { name  ,year ,board ,qualification }).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            qualification: "",
            board : "",
            year : "",
          
          loading: false,
          createdEducation: data.name
          });
        }
      }
    );
  };

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdEducation ? "" : "none" }}
    >
      <h4>{createdEducation} updated successfully</h4>
    </div>
  );

  const createProductForm = () => (
    <div className="wrapper">
    <div className="form-wrapper">
      <h1>Update Education</h1>
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
          <button className="btun" onClick={onSubmit} >Update Education</button>
          <span class="w3-tag w3-#F9B208"  ><Link to = "/admin/dashboard">Admin Home</Link></span>
      
        
            </div>
          </form>
        </div>
      </div>
  );

  return (
   <div>
          {successMessage()}
          {createProductForm()}
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

export default UpdateEducation;