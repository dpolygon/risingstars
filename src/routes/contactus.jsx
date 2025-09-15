import react from 'react'

import ContactLeft from '../Components/contactus/ContactLeft';
import ContactUsForm from '../Components/contactus/ContactUsForm';
import Footer from '../Components/Footer'

import './contactus.css'

function ContactUs() {

    return (
        <div>
            <div style={{background: 'url(/images/contactusbg.avif)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '8rem 1rem 1rem 1rem'}}>
                <div>
                    <div className='ContactUs'>
                        <ContactLeft/>
                        <ContactUsForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactUs;