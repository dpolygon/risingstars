import React from "react";

export default function HomeSplash() {
    // Array of image URLs
    const kidsUrls = [
        './images/homepagephotos/play1.webp',
        './images/homepagephotos/play2.webp',
        './images/homepagephotos/play3.webp'
    ];

    // Function to render images
    const renderKids = () => {
        return kidsUrls.map((url, index) => (
            <img className="kidsImages" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };

    return (
        <div>
            <div className="titleAreaPMessage">
                <div className="titleArea">
                    <h1 className="companyName">Rising Stars Bilingual Learning Center</h1>
                    <p className="smallText">Where Little Ones Shine Bright: Nurture, Learn, and Grow at Rising Stars - Where Smart Futures Begin!</p>
                </div>
                <div className="MessageArea">
                    <h2 className='messageTitle'>250 bright stars</h2>
                    <p className="smallText">graduated from our nurturing daycare</p>
                </div>
            </div>
            <div cdlassName="images-container">
                {renderKids()}
            </div>
        </div>
    );
}