import React from 'react'

import './Gallery.css'

import { MdInsertPhoto } from "react-icons/md";

export default function Gallery() {
    // Array of image URLs
    var kidsUrls = [
        'play1.webp',
        'play2.webp',
        'play5.webp',
        'play6.webp',
        'play7.avif',
        'girl-with-plants.webp',
        'play8.jpeg',
        'play9.jpeg'
    ];

    kidsUrls.sort(() => Math.random() - 0.5);


    // Function to render images
    const renderKids = () => {
        return kidsUrls.map((url, index) => (
            <img className="kidsImages" key={index} src={`/images/homepagephotos/${url}`} alt={`Image ${index + 1}`}/>
        ));
    };

  return (
    <div style={{backgroundColor: '#f5f5f7', overflow: 'visible'}}>
        <div style={{display: 'flex', justifyContent: 'start', overflow: 'auto', padding: '8rem 2rem 2rem 4rem'}}>
            {renderKids()}
        </div>
    </div>
  )
}
