import React, { useState, useEffect } from "react";
import Tittle from "../components/Titlte";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import SkillsSection from "../components/SkillsSection";
import { getSkill, updateSkill } from "./helper/adminapicall";

const UpdateSkill = ({ match }) => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
   name: "",
    stats: "",
    loading: false,
    error: "",
    createdSkill: "",
    getaRedirect: false,
    
  });

   const {
    name,
   stats,
    loading,
    error,
    createdSkill,
    getaRedirect,
    formData
  } = values;


  const preload = skillId => {
    getSkill(skillId).then(data => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        
        setValues({
          ...values,
          name: data.name,
          stats: data.stats,
          
        });
      }
    });
  };

  
  useEffect(() => {
    preload(match.params.skillId);
  }, []);

  
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateSkill(match.params.skillId, user._id, token).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
          stats: "",
          
          loading: false,
          createdSkill: data.name
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
      style={{ display: createdSkill ? "" : "none" }}
    >
      <h4>{createdSkill} updated successfully</h4>
    </div>
  );

  const createProductForm = () => (
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
          <button type="submit" onClick={onSubmit} >Login</button>
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
          </div>
  );
};

export default UpdateSkill;