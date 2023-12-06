// VisitUs.js
import React from 'react';
import EmbeddedMap from '../EmbeddedMap';
import './visitus.css';

function VisitUs() {
    const roundedBoxStyle = {
        width: '600px', // Adjust the width as needed
    };

     // Array of image URLs
     const quickImages = [
        './images/visitusphotos/image1.jpeg',
        './images/visitusphotos/image2.jpeg',
        './images/visitusphotos/image3.jpeg'
    ];

    // Function to render images
    const renderImages = () => {
        return quickImages.map((url, index) => (
            <img className="kidsImages" key={index} src={url} alt={`Image ${index + 1}`} style={{height: "50%"}} />
        ));
    };


  return (

    <div id='VisitUs'>
        <div className = "columnContainer">
            <h1 className="pageName">Visit Us</h1>

            <div className="images-container">
                {renderImages()}
            </div>

            <div className='roundedBox' style={roundedBoxStyle}>
                <p className="mediumText" id="address">Our Location: 11406 Conroy Ln. Manchaca, TX 78652</p>
                <EmbeddedMap />
            </div>
        </div>



        <div className='columnContainer'>
            <div className='roundedBox'>
                <p className="mediumText" id="address">Interested? Send us a message!</p>
                <form>
                    <div className='messageForm'>
                        <input type='text' placeholder='Name' id ="messageName" ></input>
                        <input type='text' placeholder='Email' id ="messageEmail"></input>
                        <input type='text' placeholder='Message' id ="messageMessage"></input>
                    </div>
                </form>
            </div>
        </div>

        



    </div>


    


  );
}

export default VisitUs;
