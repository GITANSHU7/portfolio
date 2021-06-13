import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddSkill from "./admin/AddSkill";
import AddProject from "./admin/AddProject";
import AddEducation from "./admin/AddEducation";
import ManageProjects from "./admin/ManageProjects";
import ManageSkill from "./admin/ManageSkill";
import Cart from "./core/Cart";
import NavBars from "./core/NavBars";
import Education from "./core/Education";
import Contact from "./core/Contact";
import NavBar from "./components/Navbar";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar";
import './core/home.scss'
import AboutPage from "./components/Pages/AboutPage";


const Routes = () => {
  
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    
    
    <BrowserRouter>
  <div className="Home">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
        
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      </div> 

      <Switch>
      
        <Route path="/" exact component={Home} />
        
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        
        <Route path="/education" exact component={Education} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/intro" exact component={Intro} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/about" exact component={AboutPage} />
       
        
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard"ca exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/skill"
          exact
          component={AddSkill}
        />
        <AdminRoute
          path="/admin/create/education"
          exact
          component={AddEducation}
        />
        <AdminRoute
          path="/admin/create/project"
          exact
          component={AddProject}
        />

         <AdminRoute
          path="/admin/projects"
          exact
          component={ManageProjects}
        />
         <AdminRoute
          path="/admin/skills"
          exact
          component={ManageSkill}
        />
      </Switch>
      
    </BrowserRouter>
    
  );
};

export default Routes;
