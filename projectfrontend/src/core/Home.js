import React from "react";
import "../styles.css";
import { API } from "../backend";
import AdminDashBoard from "../user/AdminDashBoard";
import Cart from "./Cart";
import HeroSection from "../components/hero/HeroSection";
import Skill from "../components/SkillSetup/UI/Skill"




export default function Home() {
  console.log("API IS", API);

  return (
    <>
    <HeroSection />
   {/* <div style = {{backgroundColor  : "white"}}>
    <Skill />
  </div> */}
        </>
  );
}
