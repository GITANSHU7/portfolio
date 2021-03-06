import React from "react";
import { Switch, Route } from "react-router-dom";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";


import AdminDashBoard from "./user/AdminDashBoard";
import AddSkill from "./admin/AddSkill";
import AddProject from "./admin/AddProject";
import AddEducation from "./admin/AddEducation";
import ManageProjects from "./admin/ManageProjects";
import ManageSkill from "./admin/ManageSkill";

import Education from "./core/Education";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/Pages/AboutPage";
import PortfoliosPage from "./components/Pages/PortfoliosPage";
import Project from "./components/Pages/BlogsPage";
import HomePage from "./components/Pages/HomePage";
import './App.scss'
import ContactPage from "./components/Pages/ContactPage";
import ResumePage from "./components/Pages/RemusePage";
import UpdateProject from "./admin/UpdateProject";
import UpdateSkill from "./admin/UpdateSkill";

import UpdateEducation from "./admin/UpdateEducation";
import ManageEducation from "./admin/ManageEducation";
import PageNotFound from "./components/Pages/PageNotFound";



function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

return (

  <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': '!navToggle'}`}>
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
        <Route path="/project" exact component={Project} />
        <Route path="/educational_details" exact component={ResumePage} />
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
        
       
        
        
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
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
         <AdminRoute
          path="/admin/education"
          exact
          component={ManageEducation}
        />
        <Route component = {PageNotFound} />
      </Switch>
      
            
      
    
        
    </div>
    </div>
    </div>

        
  );
}


export default App;