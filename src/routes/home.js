import React, { useState } from 'react'

import { Button } from '../Components/Button';
import ProgramButtons from '../Components/ProgramButtons';

import { useNavigate } from 'react-router-dom';
import { PiArrowSquareUpRightBold } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";

import './home.css'
import ProgramInfo from '../Components/ProgramInfo';

function Home() {
    const [program, setProgram] = useState('Infants');

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

    //Array of teacher image URLs
    const teacherUrls = [
        './images/homepagephotos/teacher1.webp',
        './images/homepagephotos/teacher2.webp',
        './images/homepagephotos/teacher3.webp',
        './images/homepagephotos/teacher4.webp'
    ];

    // Function to render teacher images
    const renderTeachers = () => {
        return teacherUrls.map((url, index) => (
            <img className="teacherImages" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };

    const nav = useNavigate();

    const handleVisitUs = () => {
        nav('visit-us')
    };

    const options = {
        method: 'GET',
        headers: {
            AccessControlAllowOrigin: '*',
            accept: 'application/json',
            Authorization: 'Bearer dBpln6L-4D8l5_CvqFDBxIG6MUZzwe8HYhZln7343Xvz7COJVRLnFqbLHPflYoWzqjknS7ht4s0YNF3EPpgyI9FSV4Rw0RWG1e-9Ten5tudvsdUT3Zk_hnB8IUpyZXYx'
        }
    };

    async function fetchData() {
        try {
            const fetchReviews = await fetch('http://api.yelp.com/v3/businesses/rising-stars-bilingual-daycare-manchaca-2/reviews?limit=10&sort_by=newest/', options)
            if (!fetchReviews.ok) {
                throw new Error('Failed to fetch data');
            }
            const reviews = await fetchReviews.json()
            console.log(reviews)
        }  catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <div id="homesource">
            <div className='backGround'></div>
            <div className='home'>

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

                <div className="aboutUsContainer">
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <p className="aboutUsTitle">ABOUT US</p>
                        <div className="aboutUsTeacherArea">
                            <div style={{color: 'white', marginBottom: '30px', fontSize: '30px'}}>
                                <IoIosArrowUp />
                            </div>
                            {renderTeachers()}
                            <div style={{color: 'white', paddingTop: '10px'}}>
                                <p>Meet the</p>
                                <p>teachers</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '60px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='daycareData'>
                                <h1 className='daycareDataTitle'>4</h1>
                                <p className='smallText'>Classrooms, tailored learning environments designed for each developmental stage.</p>
                            </div>
                            <div className='daycareData'>
                                <h1 className='daycareDataTitle'>6</h1>
                                <p className='smallText'>Teachers dedicated and committed to nurturing young minds and fostering growth.</p>
                            </div>
                            <div className='daycareData'>
                                <h1 className='daycareDataTitle'>8+</h1>
                                <p className='smallText'>Years of dedicated trusted care and early childhood education since establishment</p>
                            </div>
                            <div className='daycareData'>
                                <h1 className='daycareDataTitle'>2500+</h1>
                                <p className='smallText'>Children Empowered: Receiving top-tier care and education at our esteemed daycare.</p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', paddingTop: '80px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{maxWidth: '600px'}}>
                                    <h1 className='expertsTitle'>EXPERTS IN CHILDHOOD EDUCATION</h1>
                                    <p className='smallText'>Our seasoned team is devoted to providing an enriching educational experience, ensuring your child receives top-notch care and learning tailored to their individual needs.</p>
                                </div>
                                <div style={{paddingTop: '40px', paddingBottom: '40px', width: '50%'}}>
                                    <Button buttonSize='btn-large' buttonStyle={'btn-outline'} onClick={handleVisitUs}>Learn More Visit Us <PiArrowSquareUpRightBold /></Button>
                                </div>
                            </div>
                            <div style={{width: '40%'}}>
                                <video controls autoPlay loop style={{width: '100%', height: '100%', borderRadius: '30px'}}y>
                                    <source src="videos/video1.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='programs'>
                    <div className='programsTop'>
                        <h1 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '5rem'}}>OUR PROGRAMS <FaChildren style={{paddingLeft: '20px'}} /></h1>
                        <ProgramButtons setProgram={setProgram}/>
                    </div>
                    <ProgramInfo selectedProgram={program}/>
                </div>

                {/* <div className='reviewsArea'>
                    <div className='reviewsContainer'>
                        <div className="reviews">
                            <p style={{padding: '8px 20px'}}>Reviewer Name</p>
                            <p>ajkdfjk</p>
                        </div>
                    </div>
                    <h1 style={{color: 'white'}}>Hear from Happy Parents!</h1>
                </div> */}
            </div>
        </div>
    );
}

export default Home;