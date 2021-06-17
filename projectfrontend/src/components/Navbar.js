
import avatar from '../img/about1.jpg';
import {NavLink} from 'react-router-dom';
import React , { Fragment } from 'react';
import { Link  , withRouter} from 'react-router-dom';
import { signout, isAutheticated } from '../auth/helper'
function Navbar() {
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

                <footer className="footer">
                    <p>
                        @2021 
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;