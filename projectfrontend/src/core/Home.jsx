import React from "react";
import "../styles.css";
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



export default function Home() {
  console.log("API IS", API);
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
    <div className= "home">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
    {/*<HeroSection />*/}
    <Cart />
    <Contact />
    <Area />
    </div>
    </div>
   {/* <div style = {{backgroundColor  : "white"}}>
    <Skill />
  </div> */}
        </>
  );
}
