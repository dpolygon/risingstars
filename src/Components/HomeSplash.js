import React from "react";

import './HomeSplash.css'

import { HiOutlineArrowSmallDown } from "react-icons/hi2";

export default function HomeSplash() {
    return (
        <div style={{padding: '3%'}}>
            <div className="titleArea">
                <img src="./images/logo.png" style={{height: '60vh'}}></img>
                <h1 style={{marginTop: '-50px', fontSize: '3rem'}}>Bilingual Learning Center</h1>
                <p>Where Little Ones Shine Bright & Smart Futures Begin!</p>
            </div>
            <HiOutlineArrowSmallDown style={{display: 'block', bottom: '5%', left: '48.5%', position: 'sticky', color: 'white', fontSize: '3rem'}}/>
            <div style={{
                        display: 'block', 
                        width: '33%',
                        bottom: '5%', 
                        position: 'sticky', 
                        color: 'white'
                        }}>
                <h2 className='messageTitle'>250 bright stars</h2>
                <p className="smallText">graduated from our nurturing daycare</p>
            </div>
        </div>
    );
}