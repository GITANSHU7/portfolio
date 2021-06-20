import React from 'react'
import ContactItem from '../../components/ContactItem';
import phone from '../../img/phone.svg';
import email from '../../img/emailme.svg';
import location from '../../img/location.svg';
import Tittle from '../../components/Titlte';

const refreshPage = () => (
    window.location.reload(false)
)

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
            <div className="fcf-body">

<div className="fcf-form">
<h3 className="fcf-h3">Contact us</h3>


    
    <div className="fcf-form-group">
        <label type="Name" className="fcf-label">Your name</label>
        <div className="fcf-input-group">
            <input type="text" id="Name" name="Name" className="fcf-form-control" required placeholder="Enter Your Name" />
        </div>
    </div>

    <div className="fcf-form-group">
        <label type="Email" className="fcf-label">Your email address</label>
        <div className="fcf-input-group">
            <input type="email" id="Email" name="Email" className="fcf-form-control" required  placeholder="Enter Your Email Id"/>
        </div>
    </div>

    <div className="fcf-form-group">
        <label type="Name" className="fcf-label">Subject</label>
        <div className="fcf-input-group">
            <input type="text" id="Subject" name="Subject" className="fcf-form-control" required placeholder="Enter Subject" />
        </div>
    </div>
    <div className="fcf-form-group">
        <label type="Message" className="fcf-label">Your message</label>
        <div className="fcf-input-group">
            <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000" required placeholder="Enter Message" ></textarea>
        </div>
    </div>

    <div className="fcf-form-group">
        <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block" onClick={refreshPage}>Send Message</button>
    </div>

    


</div>

</div>


               {/* <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+257 7756110718'} text2={'+0333 6782 8792'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'loremipusum@hmail.com'} text2={'abcloremipsum@gmail.com'} title={'Email'}/>
    </div>*/}
            </div>
        </div>
    )
}

export default ContactPage;