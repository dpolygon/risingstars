import React, { useState } from 'react'

import './ContactUsForm.css'
import { config } from '../../Constants'

export default function ContactUsForm() {
    const [activeButton, setActiveButton] = useState('text');
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState({
        name: "",
        contactInfo: "",
        message: "",
    });

    const handleStateChange = (event) => {
        const { name, value } = event.target;
        setText({
            ...text,
            [name]: value
        });
    }

    const sendMail = () => {
        fetch(`${config.url.BACKEND_URL}/api/send-mail`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(text)
        })
            .then(() => {
                setText({
                    name: "",
                    contactInfo: "",
                    message: "",
                })
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const sendText = () => {
        fetch(`${config.url.BACKEND_URL}/api/send-text`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(text)
        })
            .then(() => {
                setText({
                    name: "",
                    contactInfo: "",
                    message: "",
                })
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleEmailClick = async () => {
        if (text.name === "" || text.message === "" || text.contactInfo === "") {
            return
        }
        setIsLoading(true);
        if (activeButton === "text") {
            sendText();
        } else {
            sendMail();
        }
    }

    return (
        <div className='ContactUsForm'>
            <div style={{display: 'flex', flexDirection: 'column', paddingBottom: '1rem', justifyContent: 'left'}}>
                <p style={{fontSize: '15px', paddingRight: '1rem', color: 'black'}}>Communication Preference: </p>
                <div>
                    <button className='contactUsPreferenceButton' onClick={() => setActiveButton('text')} style={{backgroundColor: activeButton === "text" ? "black" : "#A9A9A9", color: "white"}}>
                        Text
                    </button>
                    <button className='contactUsPreferenceButton' onClick={() => setActiveButton('email')} style={{backgroundColor: activeButton === "email" ? "black" : "#A9A9A9", color: "white"}}>
                        Email
                    </button>
                </div>
            </div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <input required
                    className='ContactUsInput1'
                    value={text.name}
                    onChange={handleStateChange}
                    name="name"
                    placeholder="First Name"
                />
                <input required
                    className='ContactUsInput1'
                    value={text.contactInfo}
                    onChange={handleStateChange}
                    name="contactInfo"
                    placeholder={activeButton === "text" ? "Mobile Number" : "E-mail"}
                />
                <textarea required
                    className='ContactUsInput1'
                    value={text.message}
                    onChange={handleStateChange}
                    name='message'
                    placeholder='Ask us anything!'
                    style={{height: '400px', 
                            width: '100%',
                            resize: 'none'}}
                    maxLength="4000"
                />
                <button onClick={handleEmailClick} style={{height: '80px', fontSize: '15px', border: '1px solid black'}} className='ContactUsSendButton' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}
