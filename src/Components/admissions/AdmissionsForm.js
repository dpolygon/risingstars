import React, { useState } from 'react'
import { subDays, addDays } from 'date-fns'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AdmissionsForm() {
    const [activeButton, setActiveButton] = useState('text');
    const [isLoading, setIsLoading] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [text, setText] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        childName: "",
        childAge: "",
        date: "",
        message: "",
    });

    const handleStateChange = (event) => {
        const { name, value } = event.target;
        setText({
            ...text,
            [name]: value
        });
        console.log(text)
    }

    const handleDateChange = (date) => {
        setText({
            ...text,
            ['date']: date
        });
    }

    const sendMail = () => {
        fetch('/send-mail', {
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
  
        sendMail();
    }

  return (
        <form style={{display: 'flex', flexDirection: 'column', margin: '110px'}}>
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
                placeholder={"Mobile Number"}
            />
            <input required
                className='ContactUsInput'
                value={text.email}
                onChange={handleStateChange}
                name="email"
                placeholder={"E-mail"}
            />
            <input required
                className='ContactUsInput'
                value={text.childName}
                onChange={handleStateChange}
                name="childName"
                placeholder={"Childs Name"}
            />
            <input required
                className='ContactUsInput'
                value={text.childAge}
                onChange={handleStateChange}
                name="childAge"
                placeholder={"Childs Age"}
            />
            <DatePicker
                showIcon
                selected={text.date}
                onChange={handleDateChange}
                includeDateIntervals={[
                    { start: new Date(), end: addDays(new Date(), 365) },
                ]}
                placeholderText="Desired Start Date"
            />
            <textarea required
                className='ContactUsInput'
                value={text.message}
                onChange={handleStateChange}
                name='message'
                placeholder='Leave us your message'
                style={{height: '400px', 
                        width: '100%',
                        resize: 'none',
                        border: 'none'}}
                maxLength="4000"
            />
            <button onClick={handleEmailClick} style={{height: '80px', fontSize: '15px', border: '1px solid black'}} className='ContactUsSendButton' disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
            </button>
        </form>
  )
}
