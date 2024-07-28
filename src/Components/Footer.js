import React from 'react'

import './Footer.css'

import { IoLogoFacebook } from "react-icons/io";
import { ImYelp } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";


import { useNavigate } from 'react-router-dom';


export default function Footer() {
    const nav = useNavigate();
    const handleAboutClick = () => {
        nav('about')
    };

    const handleVisitUsClick = () => {
        nav('visit-us')
    };

    const handleContactClick = () => {
        nav('contact')
    }

    return (
        <div>
            <div style={{background: 'linear-gradient(120deg, #4286f4, #1ed75fda)'}}>
                <div className='footer'>
                    <div className='rightFooter'>
                        <div style={{marginBottom: '1rem'}}>
                            <p className='logoName'>Rising Stars</p>
                            <p className='logoName'>Bilingual Learning Center</p>
                        </div>
                        <div className='footerSocialLinks' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem'}}>
                            <IoLogoFacebook 
                                    style={{cursor: 'pointer', marginRight: '.5rem', fontSize: '2rem'}}
                                    onClick={ () => {   const urlToOpen = 'https://www.facebook.com/risingstarsbilingual/';
                                                        window.open(urlToOpen, '_blank');
                                                    }}
                                />
                            <ImYelp
                                style={{cursor: 'pointer', marginRight: '.5rem', fontSize: '2rem'}}
                                onClick={ () => {   const urlToOpen = 'https://www.yelp.com/biz/rising-stars-bilingual-daycare-manchaca-2';
                                                    window.open(urlToOpen, '_blank');
                                                }}
                            />
                            <p style={{fontFamily: 'OEGP', fontSize: '1.5rem', cursor: 'pointer'}}
                                onClick={ () => {   const urlToOpen = 'https://www.lonestardev.net';
                                    window.open(urlToOpen, '_blank');
                                }}
                            >LoneStarDev</p>
                        </div>
                        <Button/>
                    </div>
                    <div className='footerHours'>
                        <h3 style={{paddingBottom: '1rem'}}>Hours of Operation:</h3>
                        <p>Monday through Friday</p>
                        <p>7:00am to 5:00pm</p>
                    </div>
                    <div className='footerContact'>
                        <h3 className='footerSocialLinks' style={{paddingBottom: '1rem'}}>Contact Information:</h3>
                        <div    style={{cursor: 'pointer', marginBottom: '1rem', display: 'flex', flexDirection: 'column'}}
                                onClick={ () => {  const urlToOpen = 'https://goo.gl/maps/QrgCANfTutVutyZa6';
                                                window.open(urlToOpen, '_blank');}}>
                            <div className='footerAddy' style={{display: 'flex', flexDirection: 'row'}}>
                                <MdLocationPin style={{fontSize: '1.3rem'}}/>
                                <div>
                                    <p>11406 Conroy Ln</p>
                                    <p>Manchaca, Texas</p>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingBottom: '1rem'}}>
                            <FaPhone/><a href='tel:7372260768' style={{color: 'white'}}> +1 (737) 226-0768</a>
                        </div>
                        <div>
                            <IoMail style={{fontSize: '1.3rem'}}/>
                            <a href='mailto:risingstarsaustintexas@gmail.com' style={{color: 'white'}}> RisingStarsAustinTexas@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div style={{background: 'rgb(0,0,0, .12)'}}>
                    <p className='copyrightTag'>2024 Rising Stars & LoneStarDev. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}


const Button = () => (
    <div className='bttButton'
        style={{
            backgroundColor: 'transparent',
            border: '1px solid var(--primary)',
            padding: '8px 20px',
            borderRadius: '33px',
            cursor: 'pointer',
            width: '50%'
        }}
        onClick = {() => {
            window.scroll({top: 0, behavior: 'smooth' })
        }}
    >
        <p style={{color: 'white', fontSize: '1rem'}}>Back to Top</p>
    </div>
);