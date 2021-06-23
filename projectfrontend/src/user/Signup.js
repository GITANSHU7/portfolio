import React, { useState } from "react";
import Tittle from "../components/Titlte";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "gitanshu",
    email: "gitanshu@gmail.com",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div>
      <Tittle title={'Sign in'} span={'Sign in'} />
      <br />
      <br />
      <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form>
    <div className="name">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter Your Name"
              type="name"
              name="name"
              onChange={handleChange("name")}
              value={name}
            />
            
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email Id"
              type="email"
              name="email"
              onChange={handleChange("email")}
              value={email}
            />
            
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
               onChange={handleChange("password")}
              value={password}
              placeholder="Enter Your Password"
              type="password"
              name="password"
             
            />
           
          </div>
          <div className="createAccount">
            <button type="submit" onClick={onSubmit} >Login</button>
           
          </div>
        </form>
      </div>
    </div>
    </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin"> Login Here</Link>
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
    <>
    
    
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/*<p className="text-white text-center">{JSON.stringify(values)}</p>*/}
    </>
  );
};

export default Signup;
