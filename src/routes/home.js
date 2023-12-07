import React, { useState } from 'react'

import programsData from '../data/programsData.json'

import { Button } from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { PiArrowSquareUpRightBold } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";

import './home.css'

function Home() {
    const [isActive, setIsActive] = useState('btn1');

    const handleButtonClick = (buttonId) => {
        setIsActive(buttonId);
    };

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

    return (
        <div id="Home">
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
                    <div className='programOptions'>
                        <button className={isActive === 'btn1' ? 'program-btn activep' : 'program-btn'} onClick={ () => handleButtonClick("btn1")}>Infants</button>
                        <button className={isActive === 'btn2' ? 'program-btn activep' : 'program-btn'} onClick={ () => handleButtonClick('btn2')}>Toddlers</button>
                        <button className={isActive === 'btn3' ? 'program-btn activep' : 'program-btn'} onClick={ () => handleButtonClick('btn3')}>Early Preschool</button>
                        <button className={isActive === 'btn4' ? 'program-btn activep' : 'program-btn'} onClick={ () => handleButtonClick('btn4')}>Preschool</button>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '50px', height: '90vh'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '31.6%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', width: '70%'}}>
                            <h1 style={{fontSize: '4rem', fontWeight: '600'}}>{programsData[isActive].title}</h1>
                            <p style={{paddingTop: '30px', fontSize: '1rem'}}>{programsData[isActive].desc1}</p>
                        </div>
                        <div>
                            <p style={{fontSize: '2rem'}}>{programsData[isActive].milestones}</p>
                            <h2 style={{paddingTop: '40px'}}>{programsData[isActive].mile1}</h2>
                            <p className='miles'>{programsData[isActive].mile1d}</p>
                            <h2 className='miles'>{programsData[isActive].mile2}</h2>
                            <p className='miles'>{programsData[isActive].mile2d}</p>
                            <h2 className='miles'>{programsData[isActive].mile3}</h2>
                            <p className='miles'>{programsData[isActive].mile3d}</p>
                            <h2 className='miles'>{programsData[isActive].mile4}</h2>
                            <p className='miles'>{programsData[isActive].mile4d}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontSize: '1rem'}}>{programsData[isActive].desc2}</p>
                            <img src={programsData[isActive].pic1} style={{marginTop: '20px', borderRadius: '10px', objectFit: 'cover', height: '25vh'}}></img>
                        </div>
                    </div>

                    <img style={{width: '36.6%', borderRadius: '10px', objectFit: 'cover'}} src={programsData[isActive].pic2}></img>

                    <div style={{display: 'flex', flexDirection: 'column', width: '26.6%'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start'}}>
                            <img src={programsData[isActive].pic3} style={{height: '200px', width: '50%', objectFit: 'cover', borderRadius: '10px'}}></img>
                            <div style={{padding: '8px 15px', borderRadius: '30px', backgroundColor: 'rgb(230, 230, 230)', width: '47%'}}>
                                <p style={{textAlign: 'center'}}>{programsData[isActive].title2}</p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '10%'}}>
                            <p style={{fontSize: '2rem'}}>{programsData[isActive].activities}</p>
                            <h2 style={{paddingTop: '40px'}}>{programsData[isActive].act1}</h2>
                            <p className='acts'>{programsData[isActive].act1d}</p>
                            <h2 className='acts'>{programsData[isActive].act2}</h2>
                            <p className='acts'>{programsData[isActive].act2d}</p>
                            <h2 className='acts'>{programsData[isActive].act3}</h2>
                            <p className='acts'>{programsData[isActive].act3d}</p>
                            <h2 className='acts'>{programsData[isActive].act4}</h2>
                            <p className='acts'>{programsData[isActive].act4d}</p>
                            <h2 className='acts'>{programsData[isActive].act5}</h2>
                            <p className='acts'>{programsData[isActive].act5d}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hellow'>
                <h1 style={{color: 'white'}}>Hear from Happy Parents!</h1>
                <div className="containerw">
                    <div className='textw'>
                        <p style={{padding: '8px 20px'}}>Cameron1</p>
                        <p>ajkdfjk</p>
                    </div>
                    <div className='textw'>
                        <p style={{padding: '8px 20px'}}>Cameron2</p>
                    </div>
                    <div className='textw'>
                        <p style={{padding: '8px 20px'}}>Cameron3</p>
                    </div>
                    <div className='textw'>
                        <p style={{padding: '8px 20px'}}>Cameron1</p>
                        <p>ajkdfjk</p>
                    </div>
                    <div className='textw'>
                        <p style={{padding: '8px 20px'}}>Cameron2</p>
                    </div>
                    <div className='textw'>
                        <p style={{padding: '8px 20px'}}>Cameron3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;