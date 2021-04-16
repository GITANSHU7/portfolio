import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { ImLinkedin } from 'react-icons/im';
import './HeroSection.css';
import styled from "styled-components";
import Typical from 'react-typical'

const SocialContainer = styled.div`
  display: flex;
`;

const TheEffect = styled.div`

`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 45px;
  
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
  &:hover {
    color: #adadad;
  }
`;


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/select.mp4' autoPlay loop muted />
     
     <h1 >Hi , I am  Gitanshu Gautam</h1>
     <br />
     <p>Hello 👋 , I'm a <Typical
        steps={[ 'Developer', 1200 , 'Cricketer' , 1200 , 'WordPress Developer' , 1200]}
        loop={Infinity}
        wrapper="b"
      /> </p>
      <br />
     <SocialContainer>
          <SocialIcon>
          <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon>
          <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          <SocialIcon>
          <i className="fab fa-instagram"></i>
          </SocialIcon><SocialIcon>
          <i className="fab fa-github"></i>
          </SocialIcon>

        </SocialContainer>
    
  
    </div>
  );
}

export default HeroSection;
