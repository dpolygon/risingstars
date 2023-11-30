import react from 'react'

import './home.css'
import { Button } from '../Components/Button';

function Home() {

    // Array of image URLs
    const imageUrls = [
        './images/homepagephotos/play1.jpg',
        './images/homepagephotos/play2.jpg',
        './images/homepagephotos/play3.jpg'
    ];

    // Function to render images
    const renderImages = () => {
        return imageUrls.map((url, index) => (
            <img id="homepageImages" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };

    //Array of teacher image URLs
    const teacherUrls = [
        './images/homepagephotos/teacher1.jpg',
        './images/homepagephotos/teacher2.jpg',
        './images/homepagephotos/teacher3.jpg',
        './images/homepagephotos/teacher4.jpg'
    ];

    // Function to render teacher images
    const renderTeachers = () => {
        return teacherUrls.map((url, index) => (
            <img id="homepageTeachers" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };

    return (
        <body>
            <div>
                <div id="titleAreaPMessage">
                    <div id="titleArea">
                        <div id="title">
                            <h1 id="companyName">Rising Stars Bilingual Learning Center</h1>
                        </div>
                        <div id="smallText">
                            <p id="smallText">Where Little Ones Shine Bright: Nurture, Learn, and Grow at Rising Stars - Where Smart Futures Begin!</p>
                        </div>
                    </div>
                    <div id="smallText">
                        <h2>1.3k bright stars</h2>
                        <p id="smallText">graduated from our nurturing daycare</p>
                    </div>
                </div>
                <div id="images-container">
                    {renderImages()}
                </div>
                <div id="generalOneContainer">
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <p id="generalOneTitle">ABOUT US</p>
                        <div id="teacherArea">
                            {renderTeachers()}
                            <div style={{color: 'white', paddingLeft: '5px'}}>
                                <p>Meet the</p>
                                <p>teachers</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div id='daycareData'>
                                <h1 style={{fontSize: '50px'}}>8+</h1>
                                <p>Years of dedicated trusted care and early childhood education since establishment</p>
                            </div>
                            <div id='daycareData'>
                                <h1 style={{fontSize: '50px'}}>4</h1>
                                <p>Classrooms, tailored learning environments designed for each developmental stage.</p>
                            </div>
                            <div id='daycareData'>
                                <h1 style={{fontSize: '50px'}}>6</h1>
                                <p>Teachers dedicated and committed to nurturing young minds and fostering growth.</p>
                            </div>
                            <space></space>
                            <p style={{fontSize: 'large', color: 'white'}}>Learn More</p>
                        </div>
                        <div style={{paddingTop: '80px', maxWidth: '600px'}}>
                            <h1 style={{color:  'white'}}>EXPERTS IN CHILDHOOD EDUCATION</h1>
                            <p style={{color: 'white'}}>Our seasoned team is devoted to providing an enriching educational experience, ensuring your child receives top-notch care and learning tailored to their individual needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Home;