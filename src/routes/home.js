import React, { useState } from 'react'

import ProgramButtons from '../Components/ProgramButtons';
import AboutUs from '../Components/AboutUs';
import ProgramInfo from '../Components/ProgramInfo';

import { FaChildren } from "react-icons/fa6";

import './home.css'
import HomeSplash from '../Components/HomeSplash';

function Home() {
    const [program, setProgram] = useState('Infants');

    const options = {
        method: 'GET',
        headers: {
            AccessControlAllowOrigin: '*',
            accept: 'application/json',
            Authorization: 'Bearer dBpln6L-4D8l5_CvqFDBxIG6MUZzwe8HYhZln7343Xvz7COJVRLnFqbLHPflYoWzqjknS7ht4s0YNF3EPpgyI9FSV4Rw0RWG1e-9Ten5tudvsdUT3Zk_hnB8IUpyZXYx'
        }
    };

    async function fetchData() {
        try {
            const fetchReviews = await fetch('http://api.yelp.com/v3/businesses/rising-stars-bilingual-daycare-manchaca-2/reviews?limit=10&sort_by=newest/', options)
            if (!fetchReviews.ok) {
                throw new Error('Failed to fetch data');
            }
            const reviews = await fetchReviews.json()
            console.log(reviews)
        }  catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <div id="homesource">
            <div className='backGround'></div>
            <div className='home'>
                <HomeSplash/>
                <AboutUs/>

                <div className='programs'>
                    <div className='programsTop'>
                        <h1 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '5rem'}}>OUR PROGRAMS <FaChildren style={{paddingLeft: '20px'}} /></h1>
                        <ProgramButtons setProgram={setProgram}/>
                    </div>
                    <ProgramInfo selectedProgram={program}/>
                </div>

                {/* <div className='reviewsArea'>
                    <div className='reviewsContainer'>
                        <div className="reviews">
                            <p style={{padding: '8px 20px'}}>Reviewer Name</p>
                            <p>ajkdfjk</p>
                        </div>
                    </div>
                    <h1 style={{color: 'white'}}>Hear from Happy Parents!</h1>
                </div> */}
            </div>
        </div>
    );
}

export default Home;