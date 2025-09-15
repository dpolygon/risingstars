import React from 'react'

import './Gallery.css'

import { MdInsertPhoto } from "react-icons/md";

export default function Gallery() {
    // Array of image URLs
    var kidsUrls = [
        'play1.avif',
        'play2.avif',
        'play5.avif',
        'play6.avif',
        'play7.avif',
        'girl-with-plants.avif',
        'play8.avif',
        'play9.avif'
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
        <div style={{display: 'flex', justifyContent: 'start', overflow: 'auto', padding: '4rem 0rem 2rem 4rem'}}>
            {renderKids()}
        </div>
    </div>
  )
}
