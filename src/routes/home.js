import React, { useEffect, useState } from 'react'
import { FaChildren } from "react-icons/fa6";

import HomeSplash from '../Components/HomeSplash';
import AboutUs from '../Components/AboutUs';
import ProgramButtons from '../Components/ProgramButtons';
import ProgramInfo from '../Components/ProgramInfo';
import reviewData from '../data/reviewsData.json';

import './home.css'

function Home() {
    const [program, setProgram] = useState('Infants');
    const [reviewsData, setReviewsData] = useState(reviewData);

    const getYelpReviews = () => {

        const yelpApiRequest = 'https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/rising-stars-bilingual-daycare-manchaca-2/reviews?limit=10&sort_by=newest/'
        const apiKey  = process.env.REACT_APP_YELP_REVIEWS_API
        const bearerToken = 'Bearer ' + apiKey
        const options = {
            method: 'GET',
            headers: {
                AccessControlAllowOrigin: '*',
                accept: 'application/json',
                Authorization: bearerToken
            }
        };

        return fetch(yelpApiRequest, options)
            .then((res) => res.json())
            .then((json) => {setReviewsData(json);})
    };

    useEffect(() => {
        getYelpReviews();
    }, []);

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

                <div className='reviewsArea'>
                    <div className='reviewsContainer'>
                        <div className="reviews">
                            <p style={{padding: '8px 20px'}}>{reviewsData.reviews[0].user.name}</p>
                            <p>{reviewsData.reviews[0].text}</p>
                        </div>
                    </div>
                    <h1 style={{color: 'white'}}>Hear from Happy Parents!</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;