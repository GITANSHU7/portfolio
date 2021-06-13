import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage" style  = {{marginTop : "20px"}}>
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Lorem Ipsum.</span>
                </h1>
               
                
            </header>
        </div>
    )
}

export default HomePage;