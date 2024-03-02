import react, { useState } from 'react'

function ContactUs() {

    const [text, setText] = useState({
        name: "",
        phoneNumber: "",
        message: "",
    });

    const handleStateChange = (e) => {
        
    }

    const handleEmailClick = async () => {
        fetch('/send-text', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify("test luv diva")
        }) 
    } 
    
    return (
        <div className='ContactUs'>
            <h1>Contact Us</h1>
            <button onClick={handleEmailClick}>click me</button>
            <a href='sms:5129175055?body=hi'>test</a>
        </div>
    );
}

export default ContactUs;