import react from 'react'

import './admissions.css'
import Footer from '../Components/Footer'
import AdmissionsFiles from '../Components/admissions/AdmissionsFiles';
import AdmissionsForm from '../Components/admissions/AdmissionsForm';

function Admissions() {
    return (
        <div style={{background: 'url(./images/admissionsbg.avif)', backgroundSize: 'cover'}} className='Admissions'>
            <div style={{padding: '3rem 1rem 1rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 className='AdmissionsTitle'>Admissions</h1>
                <div className='AdmissionsStatus'>
                    <p style={{textAlign: 'center', fontSize: '20px', fontWeight:"600"}}>Rising Stars is currently accepting new admissions ✅</p>
                </div>
                <div className='QuoteBubble'>
                    <div className='qoute-bubble-content'>
                        <img src='/images/headshot.avif'></img>
                        <p>Welcome! Parents, you can start your application online right here. No need to submit a full application yet—just get started. To expedite the process, scroll to the bottom of the page to fill out the necessary forms. We're here to help! <br></br><br></br>- Griselda, Director</p>
                    </div>
                </div>
                <AdmissionsForm/>
                <div className="FormMessage">
<p>We’ve provided the required enrollment forms here for your convenience. Parents are welcome to review or even fill them out ahead of time before meeting with Rising Stars. This way, you don’t have to wait for us to supply the documents, and you can take your time looking them over at home. If you have any questions about the forms, we’re always happy to help.</p>                    <AdmissionsFiles/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Admissions;