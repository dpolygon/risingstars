import React from 'react'

import './InfoCards.css'

import Button from '../Button'
import { useNavigate } from 'react-router-dom';
import { config } from '../../Constants'

export default function InfoCards() {

    const handleHandbookClick = () => {
        const urlToOpen = `${config.url.BACKEND_URL}/api/get-pdf/Handbook.pdf`;
        window.open(urlToOpen, '_blank');
    }

    const nav = useNavigate();
    const handleContactUsClick = () => {
        nav('/contact-us')
    }

  return (
    <div style={{padding: '3%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ul className="info-grid">
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>When are Rising Stars' holiday and scheduled closure dates?</h2>
                </div>
                <div className='card-content2'> 
                    <p>Rising Star Bilingual Learning Center will be closed:</p>
                    <ul className= "ClosedAnswer" style={{marginTop: '20px', marginBottom: '20px', textAlign: 'left'}}>
                        <li>
                            New Year's Break
                        </li>
                        <br></br>
                        <li>
                            Martin Luther King
                        </li>
                        <br></br>
                        <li>
                            Presidents' Day
                        </li>
                        <br></br>
                        <li>
                            Spring Break
                        </li>
                        <br></br>
                        <li>
                            Easter
                        </li>
                        <br></br>
                        <li>
                            Memorial Day
                        </li>
                        <br></br>
                        <li>
                            Independence Day
                        </li>
                        <br></br>
                        <li>
                            Labor Day
                        </li>
                        <br></br>
                        <li>
                            Columbus / Indigenous Peoples' Day
                        </li>
                        <br></br>
                        <li>
                            Thanksgiving Break (Thanksgiving Week)
                        </li>
                        <br></br>
                        <li>
                            Christmas Break (last 2 weeks of the year)
                        </li>
                    </ul>
                    <p>We follow the <a target="_blank" rel="noopener noreferrer" href='https://www.austinisd.org/calendar'>AISD holiday calendar</a>.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How will parents be informed about bad weather closures?</h2>
                </div>
                <div className='card-content2'> 
                    <p className ='BadWeatherAnswer' >We follow the Austin Independent School District (AISD) Advisories, Warnings and Severe Weather Alerts so you may also check local TV stations and websites for an announcement of school/daycare closures.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>Is it okay to bring my child to Rising Stars if they're sick?</h2>
                </div>
                <div className='card-content2'> 
                    <ul className= "SickAnswer" style={{textAlign: 'left'}}>
                        <p style={{textAlign: 'center'}}>Children should not attend Rising Stars if they are ill and:</p>
                        <br></br>
                        <li>
                            Are too sick to comfortably take part in activities, including playing outside.
                        </li>
                        <br></br>
                        <li>
                            Need more care than we can provide without risking the health, safety, and supervision of the other children.
                        </li>
                        <br></br>
                        <li>
                            Have a temperature above 101°F (oral), 100°F (tympanic/ear), or 100°F (axillary/armpit), or 100°F (infrared temporal/forehead), accompanied by behavior changes or other signs of illness.
                        </li>
                        <br></br>
                        <li>
                            Signs of severe illness such as lethargy, abnormal breathing, uncontrolled diarrhea, two or more vomiting episodes in 24 hours, rash with fever, mouth sores with drooling, behavior changes, or other signs indicating severe illness.
                        </li>
                        <br></br>
                        <li>
                            Have been diagnosed with a communicable disease and are still contagious, unless they have medical documentation indicating that they are no longer contagious.
                        </li>
                    </ul>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>Who is authorized to pick up a child from Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p className='PickupAnswer'>Our normal procedure is to release the child only to his/her parents, or someone else the parents designated on the Autihorized Pick up and Emergency Contact Form. If someone other than the parent is to pick up the child, please notify us ahead of time. We MUST have written permission to release your child.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>What is the process for enrolling my child at Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p className="EnrollmentAnswer">Enrolling at Rising Stars is easy! Let us know you're interested by calling or emailing us and we'll send you information about our tuition, policies, and a calendar. 
                    <br></br>
                    <br></br>
                    If you're interested, you can schedule a tour of our center. Alternatively visit our Admissions tab to submit an application on our website and well reach out to you.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>What is the curriculum or daily schedule like at Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p style={{textAlign:"left"}}>Groups function independently but cooperatively, following routines appropriate to individual needs. The program is designed to be inclusive of all children. The Center's program is desigied to include both planned and spontaneous activities in response to children's interests. Experiences with music, movement, art, reading, writing, science, language are incorporated into daily plans. 
                        <br></br>
                        <br></br>
                        Daily schedule also includes regularly scheduled snacks and meals, rest time, indoor and outdoor play that promote the child's health, comfort and ability to care for them. We'll be teaching Spanish to children using Texas Pre-K guidelines and encouraging social and emotional development. More information can be found in the Handbook located below.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How are meals and snacks handled at Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p className='MealsAnswer'>Parents, please remember to bring meals for your child as we <span style={{fontWeight:"800"}}>do not</span> provide food. 
                    <br></br>
                    <br></br>
                    We serve morning breakfast from 8:00-8:45 am, lunch from 11:20-12:00 pm, and an afternoon snack at 3:00 pm. Milk is served with all snacks, and water is available throughout the day.
                    <br></br>
                    <br></br>
                    It's important for children to have well-balanced meals to meet their daily energy needs and support their physical and mental development. Please inform us promptly of any allergies your child may have.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How does Rising Stars handle discipline and behavior management?</h2>
                </div>
                <div className='card-content2'> 
                    <p className="DisciplineAnswer" style={{textAlign:"left"}}>Our positive discipline policy focuses on prevention, redirection, love, consistency, and firmness. We emphasize respect for others and property, explaining center rules frequently to ensure all children understand. 
                        <br></br>
                        <br></br>
                        Disagreements are expected, and we help children express feelings appropriately. We prevent problems, redirect behavior, discuss inappropriate actions, encourage making amends, and sometimes withdraw privileges. Time outs are used rarely, mainly for a brief cooling off period. We use positive behavior support strategies and welcome suggestions. 
                        <br></br>
                        <br></br>
                        Caregivers use positive methods such as praise, reminders, redirection, and brief supervised separation. Spanking, physical or verbal abuse, name-calling, and food or sleep deprivation are NEVER used. If issues persist, we hold a conference with parents to find a solution.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>What security measures are in place at Rising Stars to ensure my child's safety?</h2>
                </div>
                <div className='card-content2'> 
                    <p className='SafetyAnswer'>To ensure your child's safety, we have implemented several security measures. Caregivers are never alone with a child. We ensure that all children and caregivers are observable at all times. This includes keeping classroom doors open, ensuring a second caregiver is present, and utilizing closed-circuit cameras. 
                    <br></br>
                    <br></br>
                    Additionally, our security cameras cover outdoor areas, and all doors remain locked to prevent unknown individuals from entering the daycare.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How does Rising Stars communicate with parents about their child's progress and daily activities?</h2>
                </div>
                <div className='card-content2'> 
                    <p className='CommunicationAnswer'>At Rising Stars, we communicate with parents about their child's progress and daily activities through our end-of-day report card.</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content-handbook'>
                    <h2 className='info-card-title'>Have a question? Want to read our handbook? Access it below!</h2>
                    <div style={{paddingTop: '1rem'}}>
                        <Button buttonSize='btn-large' buttonStyle='btn-primary' onClick={handleHandbookClick} children='Click Me!'/>
                    </div>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content-handbook'>
                    <h2 className='info-card-title'>Have a question? Want to call or message us instead?</h2>
                    <div style={{paddingTop: '1rem'}}>
                        <Button buttonSize='btn-large' buttonStyle='btn-primary' onClick={handleContactUsClick} children='Contact Us'/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
