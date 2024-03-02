import react, { useState } from 'react'

function ContactUs() {

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
    } 
    
    return (
        <div className='ContactUs'>
            <h1>Contact Us</h1>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <input
                    value={text.name}
                    onChange={handleStateChange}
                    name="name"
                    placeholder="First Name"
                />
                <input
                    value={text.phoneNumber}
                    onChange={handleStateChange}
                    name="phoneNumber"
                    placeholder="Mobile Number"
                />
                <input
                    value={text.message}
                    onChange={handleStateChange}
                    name='message'
                    placeholder='ask us anything!'
                />
                <button onClick={handleEmailClick}>send</button>
            </form>
        </div>
    );
}

export default ContactUs;