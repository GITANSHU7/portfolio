import React from "react";

import { API } from "../backend";
import AdminDashBoard from "../user/AdminDashBoard";
import Cart from "./Cart";
import HeroSection from "../components/hero/HeroSection";
import Skill from "../components/SkillSetup/UI/Skill"
import Contact from "./Contact";

import { useState } from "react";
import Topbar from "../components/topbar/Topbar";
import Menu from "../components/menu/Menu";
import Area from "../components/area/Area";

import './home.scss'
import Intro from "../components/intro/Intro";
import HomePage from "../components/Pages/HomePage";
import Navbar from "../components/Navbar";
import AboutPage from "../components/Pages/AboutPage";
import {Switch , Route } from 'react-router-dom';

 function Home() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <>
   <div className="Home">
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
            
      
      </Switch>
    </div>
    </div>
    </div>
   {/* <div style = {{backgroundColor  : "white"}}>
    <Skill />
  </div> */}
        </>
  );
}


export default Home;