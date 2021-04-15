import React from "react";
import "../styles.css";
import { API } from "../backend";
import AdminDashBoard from "../user/AdminDashBoard";
import Cart from "./Cart";
import Hero from "../components/banner/Hero";



export default function Home() {
  console.log("API IS", API);

  return (
    <>
    <Hero />
        </>
  );
}
