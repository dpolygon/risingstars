import './home.css'

import React, { useState } from 'react'
import { TbSchool } from "react-icons/tb";


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
                    <div className='programTitle' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '4rem'}}>
                        <h1 className='programTitle'>OUR PROGRAMS</h1>     
                        <TbSchool/>                   
                    </div>
                    <ProgramButtons setProgram={setProgram}/>
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