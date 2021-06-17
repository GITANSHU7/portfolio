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
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faAndroid} className="icon li"/>
                    </Link>
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