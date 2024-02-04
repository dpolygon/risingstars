import React from 'react'

import './Footer.css'

import { IoLogoFacebook } from "react-icons/io";
import { ImYelp } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";



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
    <div style={{paddingTop: '3rem'}}>
        <div    className='footer' 
                style={{width: 'auto', 
                    background: 'linear-gradient(120deg, #4286f4c9, #1ed75fca)',
                    color: 'white', 
                    display: 'flex', 
                    alignContent: 'center',
                    justifyContent: 'space-evenly', 
                    alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{marginBottom: '1rem'}}>
                    <p className='logoName'>Rising Stars</p>
                    <p className='logoName'>Bilingual Learning Center</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem'}}>
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
                    <p style={{fontFamily: 'OEGP', fontSize: '1.5rem'}}>LoneStarDev</p>
                </div>
                <Button/>
            </div>
            <div className='footerLinks' style={{display: 'flex'}}>
                <p style={{fontSize: '1.2rem', marginBottom: '.5rem', cursor: 'pointer'}} onClick={handleAboutClick}>About</p>
                <p style={{fontSize: '1.2rem', marginBottom: '.5rem', cursor: 'pointer'}} onClick={handleContactClick}>Contact</p>
                <p style={{fontSize: '1.2rem', cursor: 'pointer'}} onClick={handleVisitUsClick}>Visit Us</p>
            </div>
            <div>
                <div    style={{cursor: 'pointer'}}
                        onClick={ () => {  const urlToOpen = 'https://goo.gl/maps/QrgCANfTutVutyZa6';
                                        window.open(urlToOpen, '_blank');}
                }>
                <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}><MdLocationPin/> 11406 Conroy Ln Manchaca, Texas</p>
                </div>
                <p style={{fontSize: '1.2rem'}}><FaPhone/> <a href='tel:7372260768'>+1 (737) 226-0768</a></p>
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