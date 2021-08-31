import React , { useState } from 'react'
import Tittle from '../../components/Titlte';
import emailjs from "emailjs-com";

const Result = () => {
    return(
        <p>Your message has been sent! . I Will contact you soon</p>
    )
}

const refreshPage = () => (
    window.location.reload(false)
)


function ContactPage() {
    const[result, showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_py2buo3', e.target, 'user_lsxnkeVSIEGASpAhpXN2K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true)
  }

    return (
        <div>
            
            <div className="title">
                <Tittle title={'Contact'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <form onSubmit={sendEmail}>
            <div className="fcf-body">

<div className="fcf-form">
{/*<h3 className="fcf-h3">Contact us</h3>*/}


    <div className="fcf-form-group">
    
        <label type="Name" className="fcf-label">Your name</label>
        <div className="fcf-input-group">
            <input type="text" id="name" name="name" className="fcf-form-control" required placeholder="Enter Your Name" />
        </div>
    </div>

    <div className="fcf-form-group">
        <label type="Email" className="fcf-label">Your email address</label>
        <div className="fcf-input-group">
            <input type="email" id="email" name="email" className="fcf-form-control" required  placeholder="Enter Your Email Id"/>
        </div>
    </div>

    <div className="fcf-form-group">
        <label type="Name" className="fcf-label">Subject</label>
        <div className="fcf-input-group">
            <input type="text" id="subject" name="subject" className="fcf-form-control" required placeholder="Enter Subject" />
        </div>
    </div>
    <div className="fcf-form-group">
        <label type="Message" className="fcf-label">Your message</label>
        <div className="fcf-input-group">
            <textarea id="message" name="message" className="fcf-form-control" rows="6" maxLength="3000" required placeholder="Enter Message" ></textarea>
        </div>
    </div>

    <div className="fcf-form-group">
        <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"  value="Send Message">Send Message</button>
    </div>
            <div className="row">{result ? <Result /> : ""}</div>
    

    
</div>

</div>

   <br />
{/*
               <div className="contact-sect">
                   <br />
                    <ContactItem icon={email} text1={'gitanshugautam7@gmail.com'}  title={'Email'}/>
</div> */}
    </form>
            </div>
            
        </div>
    )
}

export default ContactPage;