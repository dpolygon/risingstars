import React from 'react'
import './hourly.css'
import Footer from "../Components/Footer"

export default function Hourly() {
    return (
        <div style={{ background: 'url(./images/hourlybg.avif)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50%' }}>
            <div style={{padding: '8rem 2rem 3rem 2rem' }}>
                <h1 style={{ color: 'white', fontSize: 'clamp(3.5rem, 15vw, 8rem', textAlign: 'center' }}>Hourly Child Care Services</h1>
                <div className='hourly-data' style={{display: 'flex', flexDirection: 'column', paddingTop: '3rem', marginTop: '2rem', gap: '4rem'}}>
                    <h2 style={{color: 'white'}}>At Rising Stars Bilingual Learning Center, we recognize that families may occasionally require short-term child care without the need for full-time enrollment. To support these needs, we offer hourly child care services in a safe, structured, and nurturing environment.</h2>
                    <div>
                        <h2 style={{ color: 'white' }}>Program Information:</h2>
                        <ul className='hourly-info-list'>
                            <li className='hourly-list-item'>
                                <h3>Available for children 3 months to 5 years old.</h3>
                            </li>
                            <li className='hourly-list-item'>
                                <h3>Care is offered on an hourly basis, subject to space and availability.</h3>
                            </li>
                            <li className='hourly-list-item'>
                                <h3>2 hours minimum per visit required.</h3>
                            </li>
                            <li className='hourly-list-item'>
                                <h3>All children must have completed admission paperwork, current immunization records, and a health statement prior to attending.</h3>
                            </li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h2 style={{color: 'white'}}>Hourly Rates & Fees per child:</h2>
                        <div className='hourly-rates-fees'>
                            <div>
                                <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', textAlign: 'center', gap: '3rem', justifyContent: 'center'}}>
                                    <li><h3 style={{fontSize: 'clamp(.8rem, 3vw, 1.5rem)'}}>3 months - 18 months: <br></br>$22</h3></li>
                                    <li><h3 style={{fontSize: 'clamp(.8rem, 3vw, 1.5rem)'}}>18 months - 36 months: <br></br>$21</h3></li>
                                    <li><h3 style={{fontSize: 'clamp(.8rem, 3vw, 1.5rem)'}}>36 months - 5 years: <br></br>$20</h3></li>
                                </ul>
                            </div>
                            <div style={{paddingTop: '1rem'}}>
                                <h3>Late Pick-Up Fee: $2.00 per minute after scheduled time</h3>
                                <h3>Payment: Due at time of service</h3>
                                <h3>We Accept: Cash, Zelle, Venmo, Cash App</h3>
                            </div>
                        </div>
                        <h2 style={{color: 'white', paddingTop: '3rem'}}>
                            Our hourly care program provides the same high-quality supervision, engaging activities, and nurturing environment as our full-time programs. Families can be assured that their child will receive consistent care while enjoying a safe and welcoming setting.
                            For additional information or to reserve care, please contact us at:
                            <div style={{display: 'flex', flexDirection: 'column', paddingTop: '1rem'}}>
                                <p style={{whiteSpace: 'nowrap'}}>📞 <a style={{color: 'white', fontSize: 'clamp(1rem, 3vw, 2rem)'}} href='tel:7372260768'>(737) 226-0768</a></p>
                                <p style={{whiteSpace: 'nowrap'}}>📧 <a style={{color: 'white', fontSize: 'clamp(1rem, 3vw, 2rem)'}} href='mailto:RisingStarsAustinTexas@gmail.com'>RisingStarsAustinTexas@gmail.com</a></p>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
