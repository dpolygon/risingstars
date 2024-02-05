import React from 'react'

import './Gallery.css'

import { MdInsertPhoto } from "react-icons/md";

export default function Gallery() {
    // Array of image URLs
    const kidsUrls = [
        './images/homepagephotos/play1.webp',
        './images/homepagephotos/play2.webp',
        './images/homepagephotos/play3.webp',
        './images/homepagephotos/play4.webp',
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
    <div style={{padding: '3%', marginTop: '3rem', marginBottom: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'start', overflow: 'auto'}}>
            {renderKids()}
        </div>
    </div>
  )
}
