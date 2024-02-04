import React from "react";

import './HomeSplash.css'

import { HiOutlineArrowSmallDown } from "react-icons/hi2";

export default function HomeSplash() {
    return (
        <div style={{padding: '3%'}}>
            <div className="titleArea">
                <img src="./images/logo.webp" style={{maxHeight: '80%', width: 'auto', marginBottom: '-50px'}}></img>
                <div style={{textAlign: 'center', backgroundColor: '#2525259e', backdropFilter: 'blur(6px)', borderRadius: '33px', padding: '1%'}}>
                    <h1 style={{fontSize: '4rem'}}>Bilingual Learning Center</h1>
                    <p >Where Little Ones Shine Bright & Smart Futures Begin!</p>
                </div>
            </div>
            <HiOutlineArrowSmallDown style={{display: 'block', bottom: '5%', left: '48.5%', position: 'sticky', color: 'white', fontSize: '3rem'}}/>
            <div style={{
                        display: 'block', 
                        width: '12%',
                        bottom: '5%', 
                        position: 'sticky', 
                        color: 'white',
                        backgroundColor: '#2525259e', 
                        backdropFilter: 'blur(3px)', 
                        borderRadius: '33px', 
                        padding: '1%', 
                        textAlign: 'center'
                        }}>
                <h2 className='messageTitle'>250 bright stars</h2>
                <p className="smallText">graduated from our nurturing daycare</p>
            </div>
        </div>
    );
}