import './home.css'

import React, { useState } from 'react'
import { PiBooksDuotone } from "react-icons/pi";


import HomeSplash from '../Components/HomeSplash';
import AboutUs from '../Components/AboutUs';
import ProgramButtons from '../Components/ProgramButtons';
import ProgramInfo from '../Components/ProgramInfo';
import OurValues from '../Components/OurValues';
import Reviews from '../Components/Reviews';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';

function Home() {
    const [program, setProgram] = useState('Infants');

    return (
        <div className='home'>
            <HomeSplash/>
            <AboutUs/>
            <Gallery/>
            <div style={{marginTop: '-1.5rem', backgroundColor: 'white', paddingBottom: '70px', borderTopRightRadius: '33px', borderTopLeftRadius: '33px', zIndex: '3'}}>
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
            <Footer/>
        </div>
    );
}

export default Home;