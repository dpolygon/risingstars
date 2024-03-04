import React from 'react'

import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";

import './ContactLeft.css'

export default function ContactLeft() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '65vh'}}>
            <h1 className='ContactUsTitle'>Contact Us</h1>
            <p style={{fontSize: '17px', width: '400px', paddingBottom: '2rem'}}>We warmly welcome you to contact Rising Stars for any inquiries, we're always ready to answer any questions you may have. Whether you prefer to reach out through the convenient form or to call or email us directly using the information below, we're here to help. Your inquiries are important to us, and we look forward to assisting you in any way we can.</p>
            <div  className='ContactUsInfo' style={{borderRadius: '10px'}}>
                <h3 style={{paddingBottom: '1rem'}}>Contact Information:</h3>
                <div style={{paddingBottom: '1rem'}}>
                    <FaPhone/><a href='tel:7372260768' style={{color: 'black'}}> +1 (737) 226-0768</a>
                </div>
                <div>
                    <IoMail style={{fontSize: '1.3rem'}}/>
                    <a href='mailto:risingstarsaustintexas@gmail.com' style={{color: 'black'}}> risingStarsAustinTexas@gmail.com</a>
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
    )
}
