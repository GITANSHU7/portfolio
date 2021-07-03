
import avatar from '../img/about1.jpg';
import {NavLink} from 'react-router-dom';
import React , { Fragment , useEffect } from 'react';
import { Link  , withRouter , useHistory} from 'react-router-dom';

import { isAutheticated , signout } from "../auth/helper/index";

import { FaUserCircle } from 'react-icons/fa';




function Navbar() {

useEffect(() => {
    handlePush()
   
    
}, [])


    const history = useHistory();

    const handlePush = () => {
        
    {isAutheticated() && (
           
        <span
          
          onClick={() => {
            signout(() => {
              history.push("/");
            });
          }}
        >
          Signout
        </span>
    )}
    }

    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/resume" exact activeClassName="active">
                            Resume
                        </NavLink>
                    </li>
                   
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    
                  
                   
                    {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <NavLink
              exact activeClassName="active"
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact activeClassName="active"
              to="/signin"
            >
              Sign In
            </NavLink>
          </li>
        </Fragment>
                    )}
                </ul>


{isAutheticated() && (
       
          <span
            
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
)}

                <footer className="footer">
    {handlePush()}
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;