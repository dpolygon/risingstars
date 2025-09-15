import React from 'react'

import './TheTeam.css'

import teamMembers from '../../data/teamData.json'

export default function TheTeam() {

    const renderTeam = () => {
        return teamMembers["team-members"].map((member, index) => (
            <div key={index} className='team-member-face' style={{ backgroundImage: `url(${member.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '32px', height: '400px', color: 'white'}}>
                <div className='team-member-inside'>
                    <p style={{ textAlign: "left", fontSize: "18px" }}>{member.summary}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '17px', fontWeight: '400' }}>
                    <p>{member['name']}</p>
                    <p>{member['member-desc']}</p>
                </div>
            </div>
        ));
    }

    return (
        <div style={{ padding: "8rem 1rem 1rem 1rem" }}>
            <div className="team-grid">
                {renderTeam()}
            </div>
        </div>
    )
}
