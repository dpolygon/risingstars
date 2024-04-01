import React from "react";

import './HomeSplash.css'

import { HiOutlineArrowSmallDown } from "react-icons/hi2";

export default function HomeSplash() {
    return (
        <div className='splashBg'>
            <div style={{padding: '3%', WebkitBackdropFilter: 'brightness(40%)', backdropFilter: 'brightness(40%)'}}>
                <div className="titleArea">
                    <img className='logo' src="./images/logo.webp"></img>
                    <div style={{textAlign: 'center'}}>
                        <h1 className='blcTitle'>Bilingual Learning Center</h1>
                        <p className='blcDesc' style={{fontSize: '30px'}}>To speak two languages is to be part of two worlds!</p>
                        <p className='blcDesc'>located in South Austin</p>
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