import react from 'react'

import './home.css'
import { Button } from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { PiArrowSquareUpRightBold } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";


function Home() {

    // Array of image URLs
    const kidsUrls = [
        './images/homepagephotos/play1.jpg',
        './images/homepagephotos/play2.jpg',
        './images/homepagephotos/play3.jpg'
    ];

    // Function to render images
    const renderKids = () => {
        return kidsUrls.map((url, index) => (
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
                            <div style={{paddingBottom: '80px', maxWidth: '600px'}}>
                                <h1 className='expertsTitle'>EXPERTS IN CHILDHOOD EDUCATION</h1>
                                <p className='smallText'>Our seasoned team is devoted to providing an enriching educational experience, ensuring your child receives top-notch care and learning tailored to their individual needs.</p>
                            </div>
                            <div style={{width: '50%'}}>
                                <Button buttonSize='btn-large' buttonStyle={'btn-outline'} onClick={handleVisitUs}>Learn More Visit Us <PiArrowSquareUpRightBold /></Button>
                            </div>
                        </div>
                        <div style={{width: '40%'}}>
                            <video controls autoPlay loop style={{width: '100%', borderRadius: '30px'}}y>
                                <source src="videos/video1.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='programs'>
                <div className='programsTop'>
                    <h1 style={{fontSize: '5rem'}}>OUR PROGRAMS</h1>
                    <div className='programOptions'>
                        <Button custom='one'>Infants</Button>
                        <Button>Toddlers</Button>
                        <Button>Early Preschool</Button>
                        <Button>Preschool</Button>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '50px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                            <h1>Infants</h1>
                            <p>From tender care to developmental milestones, our daycare embraces infants aged 6 weeks to 18 months, providing a nurturing environment where every coo and step is celebrated with warmth and guidance.</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '3rem'}}>
                            <p>Cherished beginnings and endless wonder</p>
                            <img src='/images/homepagephotos/infant.jpg' style={{marginTop: '20px', height: '10rem', width: '100%', borderRadius: '10px', objectFit: 'cover'}}></img>
                        </div>
                    </div>
                    <img src='/images/homepagephotos/infant2.jpg' style={{width: '30%', height: 'auto', borderRadius: '10px', objectFit: 'cover'}}></img>
                    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img src='/images/homepagephotos/infant3.jpg' style={{height: '100px', width: '100px', objectFit: 'cover', borderRadius: '10px'}}></img>
                            <p style={{paddingLeft: '10px'}}>Essential Foundations: Nurturing Infants for Lifelong Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;