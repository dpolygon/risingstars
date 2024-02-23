import React from 'react'

import './TeamSplash.css'

import { RiStarSmileLine } from "react-icons/ri";

export default function TeamSplash() {
  return (
    <div style={{padding: '3%'}}>
        <div className='teamSplash'>
            <div>
                <p>WE ARE</p>
                <p style={{textAlign: 'left', paddingLeft: '60px'}}>RISING<RiStarSmileLine style={{scale: '.75'}}/>STARS</p>
            </div>
        </div>
    </div>
  )
}
