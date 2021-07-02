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
import NavBars from "./core/NavBars";
import Education from "./core/Education";
import Contact from "./core/Contact";
import NavBar from "./components/Navbar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/Pages/AboutPage";
import PortfoliosPage from "./components/Pages/PortfoliosPage";
import BlogsPage from "./components/Pages/BlogsPage";
import HomePage from "./components/Pages/HomePage";
import './App.scss'
import ContactPage from "./components/Pages/ContactPage";
import ResumePage from "./components/Pages/RemusePage";
import UpdateProject from "./admin/UpdateProject";
import UpdateSkill from "./admin/UpdateSkill";

import UpdateEducation from "./admin/UpdateEducation";


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

return (

  <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
          
          <Switch>
              <Route path="/" exact>
              <HomePage />
              </Route>
              <Route path="/about" exact>
              <AboutPage />
              </Route>
              <Route path="/resume" exact>
              <ResumePage />
              </Route>
              
              <Route path="/portfolios" exact>
              <PortfoliosPage />
              </Route>
              <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        
        <Route path="/education" exact component={Education} />
        <Route path="/contact" exact component={ContactPage} />
        
    
        <Route path="/about" exact component={AboutPage} />
        <Route path="/portfolios" exact component={PortfoliosPage} />
        <Route path="/blogs" exact component={BlogsPage} />
        <Route path="/remume" exact component={ResumePage} />
        <AdminRoute
          path="/admin/project/update/:projectId"
          exact
          component={UpdateProject}
        />

<AdminRoute
          path="/admin/skill/update/:skillId"
          exact
          component={UpdateSkill}
        />
        
        <AdminRoute
          path="/admin/education/update/:educationId"
          exact
          component={UpdateEducation}
        />
        
       
        
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
      
            
      
    
        
    </div>
    </div>
    </div>

        
  );
}


export default App;