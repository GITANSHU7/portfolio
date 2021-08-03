import React, { useState, useEffect } from "react";
import Tittle from '../../components/Titlte'
import ImageSection from '../../components/ImageSection';
import SkillsSection from '../../components/SkillsSection';

import {Link} from 'react-router-dom';
import {FaAndroid, FaArrowAltCircleLeft, FaArrowCircleDown ,  FaArrowCircleRight } from 'react-icons/fa';
import { getSkills } from '../../admin/helper/adminapicall';
import { isAutheticated } from '../../auth/helper';


function AboutPage() {
    
    const [skills, setSkills] = useState([]);

    const { user, token } = isAutheticated();
  
    const preload = () => {
      getSkills().then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setSkills(data);
        }
      });
    };
  
    useEffect(() => {
      preload();
    }, []);
  
    return (
        <>
           <Link to = "/">
                <FaArrowAltCircleLeft  className="float-left" style={{fontSize : "2.5rem",alignItems : "left" }} /></Link>
<br />
<br />
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About'} />
            <ImageSection />
            
            <Tittle title={'My Skills'} span={'Skills'} />
           
          {skills.map((skill, index) => {
           return (
               <div  key={index} className="skillsContainer">
                   <SkillsSection key={index}  skill={skill.name} progress={skill.stats}  width={skill.stats} />
                
               </div>
           )
           })} {/*
            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
           </div>*/}
            <Link to = "/portfolios">
                <FaArrowCircleRight  className="float-right" style={{fontSize : "2.5rem",alignItems : "left" }} /></Link>
        </div>
        
    </>
    )
}

export default AboutPage;