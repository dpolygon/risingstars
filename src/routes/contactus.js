import react, { useState } from 'react'

import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";

import './contactus.css'

function ContactUs() {
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState({
        name: "",
        phoneNumber: "",
        message: "",
    });

    const handleStateChange = (event) => {
        const { name, value } = event.target;
        setText({
            ...text,
            [name]: value
        });
    }

    const handleEmailClick = async () => {
        if (text.name === "" || text.message === "" || text.phoneNumber === "") {
            return
        }
        setIsLoading(true);
        fetch('/send-text', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(text)
        })
            .then(() => {
                setText({
                    name: "",
                    phoneNumber: "",
                    message: "",
                })
            })
            .finally(() => {
                setIsLoading(false);
            });
    } 
    
    return (
        <div className='ContactUsWrapper'>
            <div className='ContactUs'>
                <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5rem', height: '100vh'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '700px'}}>
                        <h1 className='ContactUsTitle'>Contact Us</h1>
                        <p style={{fontSize: '17px', width: '400px'}}>We warmly welcome you to contact Rising Stars for any inquiries, we're always ready to answer any questions you may have. Whether you prefer to reach out through the convenient form or to call or email us directly using the information below, we're here to help. Your inquiries are important to us, and we look forward to assisting you in any way we can.</p>
                        <div  className='ContactUsInfo' style={{borderRadius: '10px'}}>
                            <h3 style={{paddingBottom: '1rem'}}>Contact Information:</h3>
                            <div style={{paddingBottom: '1rem'}}>
                                <FaPhone/><a href='tel:7372260768' style={{color: 'white'}}> +1 (737) 226-0768</a>
                            </div>
                            <div>
                                <IoMail style={{fontSize: '1.3rem'}}/>
                                <a href='mailto:risingstarsaustintexas@gmail.com' style={{color: 'white'}}> risingStarsAustinTexas@gmail.com</a>
                            </div>
                            <div    style={{cursor: 'pointer', marginTop: '1rem', display: 'flex', flexDirection: 'column'}}
                                    onClick={ () => {  const urlToOpen = 'https://goo.gl/maps/QrgCANfTutVutyZa6';
                                                    window.open(urlToOpen, '_blank');}}>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <MdLocationPin style={{fontSize: '1.3rem'}}/>
                                    <div>
                                        <p>11406 Conroy Ln</p>
                                        <p>Manchaca, Texas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form style={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                        <input required
                            className='ContactUsInput'
                            value={text.name}
                            onChange={handleStateChange}
                            name="name"
                            placeholder="First Name"
                        />
                        <input required
                            className='ContactUsInput'
                            value={text.phoneNumber}
                            onChange={handleStateChange}
                            name="phoneNumber"
                            placeholder="Mobile Number"
                        />
                        <textarea required
                            className='ContactUsInput'
                            value={text.message}
                            onChange={handleStateChange}
                            name='message'
                            placeholder='ask us anything!'
                            style={{height: '400px', 
                                    width: '100%',
                                    resize: 'none'}}
                            maxLength="4000"
                        />
                        <button onClick={handleEmailClick} style={{height: '80px', fontSize: '15px'}} className='ContactUsSendButton' disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;