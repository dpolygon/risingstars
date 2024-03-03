import react, { useState } from 'react'

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
                <h1 style={{textAlign: 'center'}}>Contact Us</h1>
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
    );
}

export default ContactUs;