import React, { useState } from "react";
import Tittle from "../components/Titlte";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../auth/helper";
import "./Signin.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  
const refreshPage = () => (
  window.location.reload(false)
)
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div>
      <Tittle title={'Login'} span={'Login'} />
      <br />
      <br />
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
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
                placeholder="Password"
                type="password"
                name="password"
               
              />
             
            </div>
            <div className="createAccount">
              <button type="submit" className= "btun" onClick={onSubmit} >Login</button>
             
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  };

  return (
  <>
 

      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}

      {/*<p className="text-black text-center">{JSON.stringify(values)}</p>*/}
</>
  );
};

export default Signin;
