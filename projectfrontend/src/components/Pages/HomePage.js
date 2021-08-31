import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Gitanshu Gautam</span>
                </h1>
                <p className="h-sub-text">
                Full Stack Developer by profession and passion. I am resident of Bihar and I enjoy turning complicated problems into simpler ones. When I am not banging on the keyboard, you can find me playing cricket, chilling with friends     </p>
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
           
        </div>
        
        
    )
}

export default HomePage;