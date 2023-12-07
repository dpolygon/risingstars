// VisitUs.js
import React from 'react';
import EmbeddedMap from '../EmbeddedMap';
import './visitus.css';

function VisitUs() {

     // Array of image URLs
     const quickImages = [
        './images/visitusphotos/image1.jpeg',
        './images/visitusphotos/image2.jpeg',
        './images/visitusphotos/image3.jpeg'
    ];

    // Function to render images
    const renderZigzagImages = () => {
        return quickImages.map((url, index) => (
          <img className="daycareImages" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };


  return (

    <div id='VisitUs'>
        <div className = "columnContainer">
            <div>
                <h1 className="pageName">Visit Us</h1>
            </div>
            
            <div className="contentContainer">
                <div className="textContainer">
                    <p className='mediumText'>Come experience the magic of our daycare! 
                        Our doors are open, and we look forward to 
                        sharing smiles, laughter, and endless adventures with you and your little ones.
                    </p>
                </div>
            
                <div className="daycareImagesContainer">
                    {renderZigzagImages()}
                </div>
            </div>

            <div className='contentContainer'>

                <div className='roundedBox'>
                    <p className="mediumText" id="address"><span id="address">Our Location:</span> 11406 Conroy Ln. Manchaca, TX 78652</p>
                    <EmbeddedMap />
                </div>


                <div className='roundedBox'>
                    <p className="mediumText" id="address">Interested? Send us a message!</p>
                    <form>
                        <div className='messageForm'>
                            <input type='text' placeholder='Name' id ="messageName" ></input>
                            <input type='text' placeholder='Email' id ="messageEmail"></input>
                            <input type='text' placeholder='Message' id ="messageMessage"></input>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>

            </div>


        


            
        </div>


    </div>


  );
}

export default VisitUs;
