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
import About from "./core/About";
import NavBar from "./components/Navbar";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { useState } from "react";

const Routes = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    
    
    <BrowserRouter>
  <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  

      <Switch>
      
        <Route path="/" exact component={Home} />
        
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/about" exact component={About} />
        <Route path="/education" exact component={Education} />
        <Route path="/contact" exact component={Contact} />
        
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
