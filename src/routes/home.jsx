import './home.css'

import React, { useState } from 'react'
import { PiBooksDuotone } from "react-icons/pi";


import HomeSplash from '../Components/home/HomeSplash';
import AboutUs from '../Components/home/AboutUs';
import ProgramButtons from '../Components/home/ProgramButtons';
import ProgramInfo from '../Components/home/ProgramInfo';
import OurValues from '../Components/home/OurValues';
import Reviews from '../Components/home/Reviews';
import Footer from '../Components/Footer';
import Gallery from '../Components/home/Gallery';

function Home() {
    const [program, setProgram] = useState('Infants');

    return (
        <div className='home'>
            <HomeSplash/>
            <AboutUs/>
            <div style={{backgroundColor: 'white', paddingBottom: '70px', zIndex: '3'}}>
                <div style={{padding: '3%'}}>
                    <div className='programsTop'>
                        <div className='programTitle' style={{display: 'flex', alignItems: 'end'}}>
                            <h1 className='programTitle'>OUR PROGRAMS</h1>     
                            <PiBooksDuotone/>                   
                        </div>
                        <ProgramButtons setProgram={setProgram}/>
                    </div>
                    <ProgramInfo selectedProgram={program}/>
                </div>
            </div>
            <OurValues/>
            <Reviews/>
            <Gallery/>
            <Footer/>
        </div>
    );
}

export default Home;