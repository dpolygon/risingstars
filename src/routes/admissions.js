import react from 'react'

import './admissions.css'
import AdmissionsFiles from '../Components/admissions/AdmissionsFiles';

function Admissions() {
    return (
        <div style={{background: 'url(./images/admissionsbg.jpg)', backgroundSize: 'cover'}} className='Admissions'>
            <div style={{padding: '3%'}}>
                <h1 style={{textAlign: 'center', fontSize: '120px'}}>Admissions</h1>
                <p style={{textAlign: 'center'}}>Rising Stars is currently accepting new admissions ✅</p>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '110px'}}>
                    <p>"To expedite the enrollment process, parents are welcome to fill out as many forms as they'd like before contacting Rising Stars. We understand your commitment to your child's well-being. To maintain high standards and comply with Texas state law, we kindly request the necessary documents to be signed. We're here to help answer any questions you may have about the documents."</p>
                    <AdmissionsFiles/>
                </div>
            </div>
        </div>
    );
}

export default Admissions;