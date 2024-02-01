import React from 'react'

import './OurValues.css'

import { IoRocket } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";




export default function OurValues() {
  return (
    <div style={{padding: '3%'}}>
        <h1>Our Values</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2rem'}}>
            <div className='valueCell'>
                <RiLightbulbFlashLine style={{fontSize: '6rem'}}/>
                <h2 style={{borderBottom: '3px solid white'}}>Curiosity</h2>
                <p style={{textAlign: 'center'}}>We celebrate your child's boundless curiosity by nurturing their insatiable desire to explore and discover. </p>
            </div>
            <div className='valueCell'>
                <FaChildren style={{fontSize: '6rem'}}/>
                <h2>Empathy</h2>
                <p style={{textAlign: 'center'}}>Here, their unique journey is understood, ensuring they feel valued, secure, and cherished.</p>
            </div>
            <div className='valueCell'>
                <IoRocket style={{fontSize: '6rem'}}/>
                <h2>Exploration</h2>
                <p style={{textAlign: 'center'}}>Through our programs, we ignite a passion for discovery, fostering a lifelong love of learning.</p>
            </div>
        </div>
    </div>
  )
}
