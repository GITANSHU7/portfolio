import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { ImLinkedin } from 'react-icons/im';
import './HeroSection.css';




function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/select.mp4' autoPlay loop muted />
     
     <h1 >Hi , I am  Gitanshu Gautam</h1>
      <i className="fab fa-github" style={{backgroundColor : "white" , fontSize : "50px" , borderRadius : "50%" ,}}></i>
      <i className="fab fa-linkedin" style={{backgroundColor : "white" , fontSize : "50px"  , display : "flex"}}></i>
      <i className="fab fa-instagram-square"  style={{backgroundColor : "white" , fontSize : "50px"  , borderRadius : "50%", display : "flex"}}></i>
     <RiInstagramFill  style={{backgroundColor : "white" , fontSize : "50px"  , borderRadius : "50%", display : "flex"}}/>
     <ImLinkedin   style={{backgroundColor : "white" , fontSize : "50px"  , borderRadius : "50%", display : "flex"}}/>
      
  
    </div>
  );
}

export default HeroSection;
