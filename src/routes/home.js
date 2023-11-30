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
        <div id="Home">
            <div className="titleAreaPMessage">
                <div className="titleArea">
                    <h1 className="companyName">Rising Stars Bilingual Learning Center</h1>
                    <p className="smallText">Where Little Ones Shine Bright: Nurture, Learn, and Grow at Rising Stars - Where Smart Futures Begin!</p>
                </div>
                <div className="MessageArea">
                    <h2>1.3k bright stars</h2>
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
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div className='daycareData'>
                            <h1 className='daycareDataTitle'>8+</h1>
                            <p>Years of dedicated trusted care and early childhood education since establishment</p>
                        </div>
                        <div className='daycareData'>
                            <h1 className='daycareDataTitle'>4</h1>
                            <p>Classrooms, tailored learning environments designed for each developmental stage.</p>
                        </div>
                        <div className='daycareData'>
                            <h1 className='daycareDataTitle'>6</h1>
                            <p>Teachers dedicated and committed to nurturing young minds and fostering growth.</p>
                        </div>
                        <space></space>
                        <p style={{fontSize: 'large', color: 'white'}}>Learn More</p>
                    </div>
                    <div style={{paddingTop: '80px', maxWidth: '600px'}}>
                        <h1 style={{color:  'white'}}>EXPERTS IN CHILDHOOD EDUCATION</h1>
                        <p style={{color: 'rgba(255, 255, 255, 0.75)'}}>Our seasoned team is devoted to providing an enriching educational experience, ensuring your child receives top-notch care and learning tailored to their individual needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;