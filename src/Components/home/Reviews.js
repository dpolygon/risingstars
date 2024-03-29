import React, { useEffect, useState } from 'react'

import './Reviews.css';
import { FaYelp } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { config } from '../../Constants'

import reviewData from '../../data/reviewsData.json';

export default function Reviews() {
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
        return fetch(`${config.url.BACKEND_URL}/api/reviews`)
            .then((res) => res.json())
            .then((json) => {setReviewsData(json);})
            .then(data => console.log(data))
    };

    useEffect(() => {
        getYelpReviews();
    }, []);

    return (
        <div style={{backgroundColor: 'white', paddingTop: '110px', paddingBottom: '70px'}}>
            <div style={{padding: '3%'}}>
                <h1 className='reviewsTitle'>Testimonials<br></br>From Parents</h1>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div className='reviewsContainer'>
                        <div id='rev' className="reviews" 
                        onClick={() => {const urlToOpen = reviewsData.reviews[count].url;
                                        window.open(urlToOpen, '_blank');
                        }}>
                            <img src={reviewsData.reviews[count].user.image_url === null ? "/images/defaultpfp.webp" : reviewsData.reviews[count].user.image_url} style={{borderRadius: '50%', height: '80px', width: '80px'}}></img>
                            <p className='reviewName'>{reviewsData.reviews[count].user.name}</p>
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                            <p className='usrReview'>{'"' + reviewsData.reviews[count].text + '"'}</p>
                            <p className='readMore'>Read Full Review on <FaYelp />Yelp <FaSquareArrowUpRight /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
