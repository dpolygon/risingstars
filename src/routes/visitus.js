import './visitus.css';
import Footer from '../Components/Footer';
import React, { useState, useEffect } from 'react';


function VisitUs() {

     // Array of image URLs
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     const quickImages = [
        '/images/visitusphotos/gallery1.webp',
        '/images/visitusphotos/gallery2.webp',
        '/images/visitusphotos/gallery3.webp',
        '/images/visitusphotos/gallery4.GIF',
        '/images/visitusphotos/gallery5.GIF'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === quickImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3500); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    // Function to move to the next image
    const nextImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === quickImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to move to the previous image
    const prevImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? quickImages.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className = 'VisitUs'>
            <div className='columnContainer'>
                <div className='VSTitle'>
                        Visit Us
                </div>   

                <div className='VSTextContainer'>
                        Come experience the magic of our daycare! 
                        Our doors are open, and we look forward to sharing smiles, laughter, and 
                        endless adventures with you and your little ones.
                </div>
            
            
                <div className='linkText'>
                    <a href= "/contact-us">Schedule a tour with Rising Stars!</a> 🗓️
                </div>
                

                <div className='rowContainer'>
                    <div className="slideshow-container">
                        <button className= "prevButton" onClick={prevImage}>←</button>
                            {quickImages.map((imageUrl, index) => (
                                <div key={index} className={
                                    index === currentImageIndex
                                        ? 'slide active'
                                        : 'slide'}>
                                    <img className= "image" src={imageUrl} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        <button className= "nextButton" onClick={nextImage}>→</button>
                    </div>
                </div>                                    
            </div>
            <Footer/>
        </div>
        

    );
}

export default VisitUs;
