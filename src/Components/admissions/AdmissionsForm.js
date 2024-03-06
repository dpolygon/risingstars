import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns'
import { MdOutlineDeleteForever } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

import './AdmissionsForm.css'

export default function AdmissionsForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [application, setApplication] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        childName: "",
        childAge: "",
        date: "",
        message: "",
        pdfs: []
    });

    const handleStateChange = (event) => {
        const { name, value } = event.target;
        setApplication({
            ...application,
            [name]: value
        });
    }

    const handleDateChange = (date) => {
        setApplication({
            ...application,
            ['date']: date.toString()
        });
    }

    const sendApplication = () => {
        const formData = new FormData();
        formData.append('name', application.name);
        formData.append('phoneNumber', application.phoneNumber);
        formData.append('email', application.email);
        formData.append('childName', application.childName);
        formData.append('childAge', application.childAge);
        formData.append('date', application.date);
        formData.append('message', application.message);
        application.pdfs.forEach((file, index) => {
            formData.append('files', file, file.name);
        });
    
        fetch('/send-application', {
            method: 'POST',
            body: formData
        })
        .then(() => {
            setApplication({
                name: "",
                phoneNumber: "",
                email: "",
                childName: "",
                childAge: "",
                date: "",
                message: "",
                pdfs: []
            })
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    

    const handleEmailClick = async () => {
        if (application.name === "" || application.message === "" || application.contactInfo === "") {
            return
        }
        setIsLoading(true);
        sendApplication();
    }

  return (
    <div>
        <form className='applicationForm'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input required
                    className='ContactUsInput'
                    value={application.name}
                    onChange={handleStateChange}
                    name="name"
                    placeholder="Full Name"
                />
                <input required
                    className='ContactUsInput'
                    value={application.phoneNumber}
                    onChange={handleStateChange}
                    name="phoneNumber"
                    placeholder={"Phone Number"}
                />
                <input required
                    className='ContactUsInput'
                    value={application.email}
                    onChange={handleStateChange}
                    name="email"
                    placeholder={"E-mail"}
                />
                <input required
                    className='ContactUsInput'
                    value={application.childName}
                    onChange={handleStateChange}
                    name="childName"
                    placeholder={"Childs Full Name"}
                />
                <input required
                    className='ContactUsInput'
                    value={application.childAge}
                    onChange={handleStateChange}
                    name="childAge"
                    placeholder={"Childs Age"}
                />
                <DatePicker
                    required
                    showIcon
                    selected={application.date}
                    onChange={handleDateChange}
                    includeDateIntervals={[
                        { start: new Date(), end: addDays(new Date(), 365) },
                    ]}
                    placeholderText="Desired Start Date"
                />
            </div>
            <div style={{width: '400px'}}>
                <textarea required
                    className='ContactUsInput'
                    value={application.message}
                    onChange={handleStateChange}
                    name='message'
                    placeholder='Leave us your message'
                    style={{height: '400px', 
                            width: '100%',
                            resize: 'none',
                            border: 'none'}}
                    maxLength="4000"
                />
                <button onClick={handleEmailClick} style={{height: '80px', width: '100%', fontSize: '15px', border: '1px solid black'}} className='ContactUsSendButton ContactUsSendButton1' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>         
            </div>
            <DropZone application={application} setApplication={setApplication} />
            <button onClick={handleEmailClick} style={{height: '80px', width: '100%', fontSize: '15px', border: '1px solid black'}} className='ContactUsSendButton ContactUsSendButton2' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>  

        </form>
    </div>        
  )
}

const DropZone = ({ application, setApplication }) => {
    const MAX_FILES = 11;

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files);
        const totalFiles = [...application.pdfs, ...newFiles];
        if (totalFiles.length <= MAX_FILES) {
            setApplication({
                ...application,
                pdfs: totalFiles
            });
        } else {
            alert('You can only upload a maximum of 11 files.');
        }
    };

    const handleInputChange = (e) => {
        const newFiles = Array.from(e.target.files);
        const totalFiles = [...application.pdfs, ...newFiles];
        if (totalFiles.length <= MAX_FILES) {
            setApplication({
                ...application,
                pdfs: totalFiles
            });
        } else {
            alert('You can only upload a maximum of 11 files.');
        }
    };

    const removeFile = (index) => {
        const newFiles = [...application.pdfs];
        newFiles.splice(index, 1);
        setApplication({
            ...application,
            pdfs: newFiles
        });
    };

    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                style={{ border: '1px dotted black', padding: '20px', textAlign: 'center', cursor: 'pointer', WebkitBackdropFilter: 'blur(12px)'}}
            >
                <input
                    type="file"
                    id="fileInput"
                    multiple
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                />
                <p>Drag & drop files here or click select files</p>
                <button type="button" onClick={handleClick}>Select Files</button>
                <input
                ref={hiddenFileInput}
                    type="file"
                    onChange={handleInputChange}
                    multiple
                    style={{ display: 'none' }}
                />
            </div>
            <div>
                <ul>
                    {application.pdfs.map((file, index) => (
                        <li key={index} style={{ listStyleType: 'none'}}>
                            {file.name}{' '}
                            <button type="button" onClick={() => removeFile(index)}><MdOutlineDeleteForever /></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


