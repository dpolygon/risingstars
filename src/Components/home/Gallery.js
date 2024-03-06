import React from 'react'

import './Gallery.css'

import { MdInsertPhoto } from "react-icons/md";

export default function Gallery() {
    // Array of image URLs
    const kidsUrls = [
        './images/homepagephotos/girl-with-plants.jpg',
        './images/homepagephotos/play1.webp',
        './images/homepagephotos/kids-painting-with-teacher.jpg',
        './images/homepagephotos/play2.webp',
        './images/homepagephotos/epreschool5.jpg',
        './images/homepagephotos/babies-in-cribs.jpg',
        './images/homepagephotos/play5.webp',
        './images/homepagephotos/play6.webp'
    ];

    // Function to render images
    const renderKids = () => {
        return kidsUrls.map((url, index) => (
            <img className="kidsImages" key={index} src={url} alt={`Image ${index + 1}`}/>
        ));
    };

  return (
    <div style={{backgroundColor: '#f5f5f7', padding: '3%', paddingTop: '3rem', paddingBottom: '3rem'}}>
        <div style={{display: 'flex', justifyContent: 'start', overflow: 'auto'}}>
            {renderKids()}
        </div>
    </div>
  )
}
