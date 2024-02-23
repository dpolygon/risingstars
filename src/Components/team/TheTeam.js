import React from 'react'

import './TheTeam.css'

export default function TheTeam() {
  return (
    <div style={{padding: '3%'}}>
        <div className='teamSplash'>
            <ul className="team-grid">
                <li className="team-card">
                    <div style={{backgroundImage: 'url("./images/ourteam/grisphoto.jpg")', backgroundSize: 'cover', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}} className='team-member-card' >
                        <div className='team-member-wrapper'>
                            <div className='team-member-card2'>
                                <p style={{fontSize: '20px', lineHeight: '1.15'}}>Hello, I'm Griselda Gonzalez, the owner and care provider at Rising Stars. With many years of experience working with children of all age levels, I founded Rising Stars in 2015 to create a bilingual, diverse, and nurturing environment. At Rising Stars, we strive to help young children grow into independent, self-confident, and inquisitive learners.</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', fontSize: '17px', fontWeight: '400'}}>
                                <p>Griselda Gonzalez</p>
                                <p>Early Childhood Educator | Director</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="team-card">
                    <div style={{backgroundImage: 'url("./images/ourteam/grisphoto.jpg")', backgroundSize: 'cover', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}} className='team-member-card' >
                        <div className='team-member-wrapper'>
                            <div className='team-member-card2'>
                                <p style={{fontSize: '20px', lineHeight: '1.15', mixBlendMode: 'difference'}}>Hello, I'm Griselda Gonzalez, the owner and care provider at Rising Stars. With many years of experience working with children of all age levels, I founded Rising Stars in 2015 to create a bilingual, diverse, and nurturing environment. At Rising Stars, we strive to help young children grow into independent, self-confident, and inquisitive learners.</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', fontSize: '17px', fontWeight: '400'}}>
                                <p>Griselda Gonzalez</p>
                                <p>Early Childhood Educator | Director</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="team-card">
                    <div style={{backgroundImage: 'url("./images/ourteam/grisphoto.jpg")', backgroundSize: 'cover', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}} className='team-member-card' >
                        <div className='team-member-wrapper'>
                            <div className='team-member-card2'>
                                <p style={{fontSize: '20px', lineHeight: '1.15', mixBlendMode: 'difference'}}>Hello, I'm Griselda Gonzalez, the owner and care provider at Rising Stars. With many years of experience working with children of all age levels, I founded Rising Stars in 2015 to create a bilingual, diverse, and nurturing environment. At Rising Stars, we strive to help young children grow into independent, self-confident, and inquisitive learners.</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', fontSize: '17px', fontWeight: '400'}}>
                                <p>Griselda Gonzalez</p>
                                <p>Early Childhood Educator | Director</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
