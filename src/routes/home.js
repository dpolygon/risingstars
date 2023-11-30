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
    const renderKids = () => {
        return imageUrls.map((url, index) => (
            <img className="kidsImages" key={index} src={url} alt={`Image ${index + 1}`} />
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
            <img className="teacherImages" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };

    return (
        <body>
            <div>
                <div className="titleAreaPMessage">
                    <div className="titleArea">
                        <div className="title">
                            <h1 className="companyName">Rising Stars Bilingual Learning Center</h1>
                        </div>
                        <div className="smallText">
                            <p className="smallText">Where Little Ones Shine Bright: Nurture, Learn, and Grow at Rising Stars - Where Smart Futures Begin!</p>
                        </div>
                    </div>
                    <div className="smallText">
                        <h2>1.3k bright stars</h2>
                        <p className="smallText">graduated from our nurturing daycare</p>
                    </div>
                </div>
                <div className="images-container">
                    {renderKids()}
                </div>
                <div className="generalOneContainer">
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <p className="generalOneTitle">ABOUT US</p>
                        <div className="teacherArea">
                            {renderTeachers()}
                            <div style={{color: 'white', paddingLeft: '5px'}}>
                                <p>Meet the</p>
                                <p>teachers</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='daycareData'>
                                <h1 style={{fontSize: '50px'}}>8+</h1>
                                <p>Years of dedicated trusted care and early childhood education since establishment</p>
                            </div>
                            <div className='daycareData'>
                                <h1 style={{fontSize: '50px'}}>4</h1>
                                <p>Classrooms, tailored learning environments designed for each developmental stage.</p>
                            </div>
                            <div className='daycareData'>
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