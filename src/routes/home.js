import react from 'react'

import './home.css'
import { Button } from '../Components/Button';
import { useNavigate } from 'react-router-dom';

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
            <div className="images-container">
                {renderKids()}
            </div>
            <div className="aboutUsContainer">
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <p className="aboutUsTitle">ABOUT US</p>
                    <div className="aboutUsTeacherArea">
                        {renderTeachers()}
                        <div style={{color: 'white', paddingLeft: '5px'}}>
                            <p>Meet the</p>
                            <p>teachers</p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
                        <p style={{fontSize: 'large', fontStretch: 'expanded', color: 'white'}}>Learn More</p>
                    </div>
                    <div style={{paddingTop: '80px', maxWidth: '600px'}}>
                        <h1 className='expertsTitle'>EXPERTS IN CHILDHOOD EDUCATION</h1>
                        <p className='smallText'>Our seasoned team is devoted to providing an enriching educational experience, ensuring your child receives top-notch care and learning tailored to their individual needs.</p>
                    </div>
                </div>
                <Button buttonSize='btn-large' buttonStyle={'btn-outline'} onClick={handleVisitUs}>Visit Us</Button>
            </div>
        </div>
    );
}

export default Home;