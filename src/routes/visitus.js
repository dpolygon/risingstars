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
        <div className='header'>
            <div className='columnContainer'>
                <div className='VSTitle'>
                    Visit Us
                </div>
                <div className='rowContainer'>
                    <div className='columnContainer'>
                        <div className='VSTextContainer'>
                                Located in South Austin, come experience the magic of our daycare! 
                                    Our doors are open, and we look forward to sharing smiles, laughter, and 
                                    endless adventures with you and your little ones.
                        </div>
                        <div className='formBox'>
                            <div className='formBox2'>
                                <div className= 'columnContainer'>
                                    <div className='formTitle'>
                                        To reach out to us, please fill in the form below:
                                    </div>

                                    <div className='formTitle2'>
                                        Contact Form
                                    </div>

                                    <hr/>
                                    <input type='text' placeholder='Name' id ="formName" ></input>
                                    <input type='text' placeholder='Email' id ="formEmail"></input>
                                    <input type='text' placeholder='Message' id ="formMessage"></input>

                                    <div className='rowContainer'>
                                        <div className='ageButton'>Baby</div>
                                        <div className='ageButton'>Toddler</div>
                                        <div className='ageButton'>Young Child</div>
                                        <div className='ageButton'>Big Child</div>
                                    </div>

                                    <button>
                                        Send Message
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='map'>
                        < EmbeddedMap/>
                    </div>

                </div>
            </div>
        </div>
    </div>


  );
}

export default VisitUs;

