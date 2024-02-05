import React from "react";

import './HomeSplash.css'

import { HiOutlineArrowSmallDown } from "react-icons/hi2";

export default function HomeSplash() {
    return (
        <div style={{WebkitBackdropFilter: 'brightness(50%)', backdropFilter: 'brightness(50%)'}}>
            <div style={{padding: '3%'}}>
                <div className="titleArea">
                    <img className='logo' src="./images/logo.webp"></img>
                    <div style={{textAlign: 'center'}}>
                        <h1 className='blcTitle'>Bilingual Learning Center</h1>
                        <p className='blcDesc'>Where Little Ones Shine Bright & Smart Futures Begin!</p>
                    </div>
                </div>
                <div className="message">
                    <h2 className='messageTitle'>250 bright stars</h2>
                    <p className="smallText">graduated from our nurturing daycare</p>
                </div>
                <HiOutlineArrowSmallDown className="arrow"/>
            </div>
        </div>
    );
}