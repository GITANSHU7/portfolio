import React from 'react';
import { Link } from 'react-router-dom';

import "./menu.scss";



export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to = "/">Home</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to = "/cart">Cart</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to = "/contact">Contact</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to = "/area">Area</Link>
        </li>
      </ul>
    </div>
  );
}