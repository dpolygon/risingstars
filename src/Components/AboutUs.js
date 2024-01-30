import React from 'react'

import './AboutUs.css'

import { Button } from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { PiArrowSquareUpRightBold } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";

export default function AboutUs() {

    return (
        <div style={{padding: '3%'}}>
            <div className="aboutUsContainer">
                <LeftInfo/>
                <RightInfo/>
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
    )
};

