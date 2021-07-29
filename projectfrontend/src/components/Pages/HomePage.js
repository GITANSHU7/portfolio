import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faAndroid} from '@fortawesome/free-brands-svg-icons';
import {faArrow} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {FaAndroid, FaArrowAltCircleDown, FaArrowCircleDown } from 'react-icons/fa';

function HomePage() {
    return (
        
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Gitanshu Gautam</span>
                </h1>
                <p className="h-sub-text">
                I'm a Full Stack Web Developer based in Bihar, India .
                I enjoy turning complex problems into simpler one. When I'm not pushing logics, you'll find me playing cricket, chilling or playing Pubg.
                </p>
                <div className="icons">
                    
                    <a href="https://github.com/GITANSHU7" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                   
                    <a href="https://www.linkedin.com/in/gitanshu-gautam-3a863b149/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </a>
                  
                </div>
                <br />
                <br />
               
                   
            </header>
            <Link to = "about">
                <FaArrowAltCircleDown  className="float-right" style={{fontSize : "2.5rem",alignItems : "left" }} /></Link>

        </div>
        
        
    )
}

export default HomePage;