import React from "react";

import './HomeSplash.css'

export default function HomeSplash() {
    return (
        <div style={{padding: '3%'}}>
            <div className="titleArea">
                <img src="./images/logo.png" style={{height: '60vh'}}></img>
                <h1 style={{textAlign: 'center'}}>Bilingual Learning Center</h1>
                <p className="smallText">Where Little Ones Shine Bright: Nurture, Learn, and Grow at Rising Stars - Where Smart Futures Begin!</p>
            </div>
            <div style={{
                        display: 'block', 
                        bottom: '5%', 
                        position: 'sticky', 
                        color: 'white'
                        }}
            >
                <h2 className='messageTitle'>250 bright stars</h2>
                <p className="smallText">graduated from our nurturing daycare</p>
            </div>
        </div>
    );
}