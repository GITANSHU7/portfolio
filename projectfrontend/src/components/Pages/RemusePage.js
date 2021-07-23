import React from 'react';
import Tittle from '../Titlte';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 import { MdWork } from 'react-icons/md';
 import { MdSchool } from 'react-icons/md';
function App() {
  return (
    <div >
    <Tittle title={'Qualification'}  />
    <br />
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
   
    dateStyle={{backgroundColor : "red"}}
  
    iconStyle={{ background: 'rgb(33, 100, 243)', color: '#fff'  }}
    icon ={<MdSchool />}
  >
      <span class="w3-tag w3-green">2014</span>
      <span class="w3-tag w3-green" style={{float:"right"}}>10th</span>
      <br />
    {/*<h3 className="vertical-timeline-element-title"></h3>*/}
    <h4 className="vertical-timeline-element-subtitle">D.A.V PUBLIC SCHOOL , SAMASTIPUR</h4>
    <p>
      CBSE BOARD
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentStyle={{ background: 'rgb(235, 237, 83)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
   
    
    iconStyle={{ background: 'rgb(33, 100, 243)', color: '#fff' }}
icon ={<MdSchool />}
  >
       <span class="w3-tag w3-#F9B208">2014 - 2016</span>
      <span class="w3-tag w3-black" style={{float:"right"}}>12th</span>
      <br />
      <h4 className="vertical-timeline-element-subtitle">St.Paul SENIOR SEC , SAMASTIPUR</h4>
    <p>
      CBSE BOARD
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(219, 35, 60)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 100, 243)', color: '#fff' }}
    icon ={<MdSchool />}
  >
        <span class="w3-tag w3-orange">2016 - 2020</span>
      <span class="w3-tag w3-orange" style={{float:"right"}}>bTech</span>
      <br />
      <h4 className="vertical-timeline-element-subtitle">DEHRADUN INSTITUTE of TECHNOLOGY</h4>
    <p>
      UGC BOARD
    </p>
  </VerticalTimelineElement>
  {/*<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
 icon = {<MdWork />}
  
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  
  />
</VerticalTimeline>
<div class="back-to-top-wrapper">
    <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">🔝</a>
  </div>
</div>
  );
  }

  export default App;