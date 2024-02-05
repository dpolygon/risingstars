import React from 'react'

import './AboutUs.css'

import { Button } from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowUp } from "react-icons/io";

export default function AboutUs() {

    return (
        <div style={{WebkitBackdropFilter: 'brightness(50%)', backdropFilter: 'brightness(50%)'}}>
            <div style={{padding: '3%'}}>
                <div className="aboutUsContainer">
                    <LeftInfo/>
                    <RightInfo/>
                </div>
            </div>
        </div>
    );
}

const LeftInfo = () => {

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

    return (
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
    )
}

const RightInfo = () => {
    const nav = useNavigate();
    const handleVisitUs = () => {
        nav('visit-us')
    };
    
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className='aboutUsTop'>
                <div className='daycareData'>
                    <h1 className='daycareDataTitle'>5</h1>
                    <p className='daycareDataDesc'>Classrooms, tailored learning environments designed for each developmental stage.</p>
                </div>
                <div className='daycareData'>
                    <h1 className='daycareDataTitle'>6</h1>
                    <p className='daycareDataDesc'>Teachers dedicated and committed to nurturing young minds and fostering growth.</p>
                </div>
                <div className='daycareData'>
                    <h1 className='daycareDataTitle'>8+</h1>
                    <p className='daycareDataDesc'>Years of dedicated trusted care and early childhood education since establishment</p>
                </div>
                <div className='daycareData'>
                    <h1 className='daycareDataTitle'>2500+</h1>
                    <p className='daycareDataDesc'>Children Empowered: Receiving top-tier care and education at our esteemed daycare.</p>
                </div>
            </div>
            <div className='aboutUsBottom'>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                    <div style={{maxWidth: '600px'}}>
                        <h1 className='expertsTitle'>OUR COMPREHENSIVE CURRICULUM</h1>
                        <p className='expertsDesc'>Encompasses both English and Spanish language proficiency. We nurture giggles and growth in all aspects social, physical, emotional, and cognitive, ensuring your little one is kindergarten-ready. Our goal is that each kid leave with a pocketful of skills, ready to blossom into someone who sparkles in every situation, always eager to learn more and more. 🌟📚</p>
                    </div>
                    <div style={{paddingTop: '40px', width: '70%'}}>
                        <Button buttonSize='btn-large' buttonStyle={'btn-outline'} onClick={handleVisitUs}>Book A Tour</Button>
                    </div>
                </div>
                <div className='video'>
                    <video controls autoPlay loop style={{width: '100%', borderRadius: '30px'}}y>
                        <source src="videos/video1.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
};

