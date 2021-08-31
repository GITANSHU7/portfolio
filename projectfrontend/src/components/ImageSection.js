import React from 'react';
function ImageSection() {
    return (
        <div className="ImageSection">
           {/* <div className="img">
                <img src={about} alt=""/>
    </div> */}
            <div className="about-info">
                <h4>I am<span> Gitanshu Gautam</span></h4>
                <p className="about-text">
                    Full stack Web Developer Enthusiast.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                       
                        <br />
                     
                    </div>
                    <div className="right-section">
                        <p>: Gitanshu Gautam</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English , Hindi</p>
                       
                        <br />
                       
                    </div>
                </div>
                {/*<button className="btn">Download Cv</button> */}
            </div>
        </div>
    )
}

export default ImageSection;