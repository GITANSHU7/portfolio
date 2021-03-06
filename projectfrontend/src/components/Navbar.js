
import avatar from '../img/about1.jpg';
import {NavLink} from 'react-router-dom';
import React , { Fragment } from 'react';
import { Link  , withRouter} from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';

function Navbar({history}) {
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
                        <NavLink to="/educational_details" exact activeClassName="active">
                            Education
                        </NavLink>
                    </li>
                   
                    
                    <li className="nav-item">
                        <NavLink to="/project" exact activeClassName="active">
                            Project
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    
                  
              {/*     
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
                    )}*/}
                </ul>



                <footer className="footer">
                    <p className="loginstyle">
                        <Link to ="/admin/dashboard"><FaUserCircle style={{marginRight : "5px"}} className="icon log" /></Link> 
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;