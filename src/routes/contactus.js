import react from 'react'

import ContactLeft from '../Components/contactus/ContactLeft';
import ContactUsForm from '../Components/contactus/ContactUsForm';
import Footer from '../Components/Footer'

import './contactus.css'

function ContactUs() {

    return (
        <div style={{background: 'url(./images/contactusbg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div style={{padding: '3%', paddingBottom: '110px'}}>
                <div className='ContactUs'>
                    <ContactLeft/>
                    <ContactUsForm/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactUs;