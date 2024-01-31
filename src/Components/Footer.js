import React from 'react'

import { IoLogoFacebook } from "react-icons/io";
import { ImYelp } from "react-icons/im";

export default function Footer() {
  return (
    <div style={{paddingTop: '3rem'}}>
        <div style={{width: 'auto', 
                    height: '25vh', 
                    backgroundColor: 'black',
                    padding: '4%',
                    color: 'white', 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignContent: 'center',
                    justifyContent: 'space-between', 
                    alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Rising Stars</p>
                <p>Bilingual Learning Center</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <IoLogoFacebook />
                    <ImYelp/>
                    <p>LoneStarDev</p>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>About</p>
                <p>Contact</p>
                <p>Visit Us</p>
            </div>
            <div>
            <p>11406 Conroy Ln</p>
                <p>Manchaca, Texas</p>
                <p>+1(737)226-0768</p>
            </div>
        </div>
    </div>
  )
}
