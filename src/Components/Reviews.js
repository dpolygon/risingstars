import React, { useEffect, useState } from 'react'

import './Reviews.css';
import reviewData from '../data/reviewsData.json';

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
        return fetch("/reviews")
            .then((res) => res.json())
            .then((json) => {setReviewsData(json);})
    };

    useEffect(() => {
        getYelpReviews();
    }, []);

    return (
        <div>
            <div className='reviewsContainer'>
                <div id='rev' className="reviews" 
                onClick={() => {const urlToOpen = reviewsData.reviews[count].url;
                                window.open(urlToOpen, '_blank');
                }}>
                    <img src={reviewsData.reviews[count].user.image_url} style={{borderRadius: '50%', height: '80px', width: '80px'}}></img>
                    <p style={{padding: '8px 20px'}}>{reviewsData.reviews[count].user.name}</p>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>{reviewsData.reviews[count].text}</p>
                </div>
            </div>
        </div>
    )
}