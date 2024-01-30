import React, { useState } from 'react'
import { FaChildren } from "react-icons/fa6";

import HomeSplash from '../Components/HomeSplash';
import AboutUs from '../Components/AboutUs';
import ProgramButtons from '../Components/ProgramButtons';
import ProgramInfo from '../Components/ProgramInfo';

import './home.css'
import Reviews from '../Components/Reviews';
import Footer from '../Components/Footer';

function Home() {
    const [program, setProgram] = useState('Infants');

    return (
        <div id="homesource">
            <div className='backGround'></div>
            <div className='home'>
                <HomeSplash/>
                <AboutUs/>

                <div className='programs' style={{padding: '3%'}}>
                    <div className='programsTop'>
                        <h1 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '5rem'}}>OUR PROGRAMS <FaChildren style={{paddingLeft: '20px'}} /></h1>
                        <ProgramButtons setProgram={setProgram}/>
                    </div>
                    <ProgramInfo selectedProgram={program}/>
                </div>

                <Reviews/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;