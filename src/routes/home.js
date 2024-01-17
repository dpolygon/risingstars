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
    const [count, setCount] = useState(0);

    useEffect(() => {
        const animatedElement = document.getElementById('rev');
        animatedElement.classList.add('blurReview');

        const timer = setTimeout(() => {
            animatedElement.classList.remove('blurReview');
          // Update the state after a delay (e.g., 3 seconds)
          setCount(prevCount => prevCount === 2 ? 0 : prevCount + 1);
        }, 10000); // Set the delay in milliseconds (3 seconds in this example)
    
        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [count]);

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

                <div className='reviewsArea' style={{marginTop: '200px'}}>
                    <div className='reviewsContainer'>
                        <div id='rev' className="reviews" 
                            onClick={() => { const urlToOpen = reviewsData.reviews[count].url;
                                             window.open(urlToOpen, '_blank');}}>
                            <img src={reviewsData.reviews[count].user.image_url} style={{borderRadius: '50%', height: '80px', width: '80px'}}></img>
                            <p style={{padding: '8px 20px'}}>{reviewsData.reviews[count].user.name}</p>
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                            <p>{reviewsData.reviews[count].text}</p>
                        </div>
                    </div>
                    <h1 style={{color: 'white'}}>Hear from Happy Parents!</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;