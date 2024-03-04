import React from 'react'

import './TheTeam.css'

import teamMembers from '../../data/teamData.json'

export default function TheTeam() {

    const renderTeam = () => {
        return teamMembers["team-members"].map((member, index) => (
            <li key={index} className="team-card">
                <div style={{backgroundImage: `url(${member.image})`, backgroundSize: 'cover', borderRadius: '12px', backgroundPosition: '50%', fontSize: '12px', fontWeight: '600'}} className='team-member-card'>
                    <div className='team-member-wrapper'>
                        <div className='team-member-card2'>
                            <p style={{fontSize: '18px', lineHeight: '1.15', }}>{member.summary}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', fontSize: '17px', fontWeight: '400'}}>
                            <p>{member['name']}</p>
                            <p style={{textAlign: 'right'}}>{member['member-desc']}</p>
                        </div>
                    </div>
                </div>
            </li>
        ));
    } 

  return (
    <div style={{padding: '3%'}}>
        <div className='teamSplash'>
            <ul className="team-grid">
                {renderTeam()}
            </ul>
        </div>
    </div>
  )
}
