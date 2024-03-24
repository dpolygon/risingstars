import react from 'react'

import './admissions.css'
import Footer from '../Components/Footer'
import AdmissionsFiles from '../Components/admissions/AdmissionsFiles';
import AdmissionsForm from '../Components/admissions/AdmissionsForm';

function Admissions() {
    return (
        <div style={{background: 'url(./images/admissionsbg.webp)', backgroundSize: 'cover'}} className='Admissions'>
            <div style={{padding: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 className='AdmissionsTitle'>Admissions</h1>
                <div style={{background: '#A5E99B', borderRadius: '33px', padding: '15px'}}>
                    <p style={{textAlign: 'center', fontSize: '17px'}}>Rising Stars is currently accepting new admissions ✅</p>
                </div>
                <div style={{backgroundColor: 'white', borderRadius: '33px', padding: '30px', width: '50%', marginTop: '110px'}}>
                    <p style={{fontSize: '17px', fontWeight: '600'}}>"Welcome! Parents, you can start your application online right here. No need to submit a full application yet—just get started. To expedite the process, scroll to the bottom of the page to fill out the necessary forms. We're here to help!" <br></br>- Griselda</p>
                </div>
                <AdmissionsForm/>
                <div style={{backgroundColor: 'lightgrey', borderRadius: '33px', padding: '30px', width: '75%', marginTop: '110px'}}>
                    <p style={{fontSize: '17px'}}>To expedite the enrollment process, parents are welcome to fill out as many forms as they'd like before contacting Rising Stars. We understand your commitment to your child's well-being. To maintain high standards and comply with Texas state law, we kindly request the necessary documents to be signed. We're here to help answer any questions you may have about the documents.</p>
                </div>
                <AdmissionsFiles/>
            </div>
            <Footer/>
        </div>
    );
}

export default Admissions;