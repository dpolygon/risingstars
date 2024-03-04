import React from 'react'

import './AboutUs.css'

import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowUp } from "react-icons/io";

export default function AboutUs() {

    return (
        <div className="aboutUsContainer">
            <div style={{padding: '3%'}}>
                <p className="aboutUsTitle">ABOUT US</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Teachers/>
                    <RightInfo/>
                </div>
            </div>
        </div>
    );
}

const Teachers = () => {

    //Array of teacher image URLs
    const teacherUrls = [
        './images/ourteam/monica.webp',
        './images/ourteam/claudia.webp',
        './images/ourteam/rosy.webp',
        './images/ourteam/martha.webp',
        './images/ourteam/grisphoto.jpg'
    ];

    // Function to render teacher images
    const renderTeachers = () => {
        return teacherUrls.map((url, index) => (
            <img className="teacherImages" key={index} src={url} alt={`Image ${index + 1}`} />
        ));
    };

    const nav = useNavigate();
    const handleMeetTeachers = () => {
        nav('our-team')
    };

    return (
        <div className="aboutUsTeacherArea" onClick={handleMeetTeachers}>
            <div style={{color: 'white', marginBottom: '30px', fontSize: '30px'}}>
                <IoIosArrowUp />
            </div>
            {renderTeachers()}
            <div style={{color: 'white', paddingTop: '10px'}}>
                <p>Meet the</p>
                <p>teachers</p>
            </div>
        </div>
    )
}

const RightInfo = () => {
    const nav = useNavigate();
    const handleVisitUs = () => {
        nav('visit-us')
    };
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '60px'}}>
            <div className='aboutUsBottom'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 className='expertsTitle'>OUR COMPREHENSIVE CURRICULUM</h1>
                    <p className='expertsDesc'>Encompasses both English and Spanish language proficiency. We nurture giggles and growth in all aspects social, physical, emotional, and cognitive, ensuring your little one is kindergarten-ready. Our goal is that each kid leave with a pocketful of skills, ready to blossom into someone who sparkles in every situation, always eager to learn more and more. 🌟📚</p>
                    <div style={{paddingTop: '40px', width: '70%'}}>
                        <Button buttonSize='btn-medium' buttonStyle={'btn-outline'} onClick={handleVisitUs} children='Book A Tour'/>
                    </div>
                </div>
                <video className='video' controls autoPlay loop y>
                    <source src="videos/video1.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <ul className='aboutUsTop'>
                <li className='daycareData'>
                    <h1 className='daycareDataTitle'>5</h1>
                    <p className='daycareDataDesc'>Classrooms, tailored learning environments designed for each developmental stage.</p>
                </li>
                <li className='daycareData'>
                    <h1 className='daycareDataTitle'>6</h1>
                    <p className='daycareDataDesc'>Teachers dedicated and committed to nurturing young minds and fostering growth.</p>
                </li>
                <li className='daycareData'>
                    <h1 className='daycareDataTitle'>9+</h1>
                    <p className='daycareDataDesc'>Years of dedicated trusted care and early childhood education since establishment</p>
                </li>
                <li className='daycareData'>
                    <h1 className='daycareDataTitle'>2500+</h1>
                    <p className='daycareDataDesc'>Children Empowered: Receiving top-tier care and education at our esteemed daycare.</p>
                </li>
            </ul>
        </div>
    )
};

