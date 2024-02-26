import React from 'react'

import './TheTeam.css'

export default function TheTeam() {
  return (
    <div style={{padding: '3%'}}>
        <div className='teamSplash'>
            <ul className="team-grid">
                <li className="team-card">
                    <div className='team-member-card'>
                        <h2 className='team-card-title'>When are Rising Stars' holiday and scheduled closure dates?</h2>
                    </div>
                    <div className='team-member-card2'> 
                        <p>youre hovering over me :3</p>
                    </div>
                </li>
                <li className="team-card">
                    <div className='team-member-card'>
                        <h2 className='team-card-title'>How will parents be informed about bad weather closures?</h2>
                    </div>
                    <div className='team-member-card2'> 
                        <p>youre hovering over me :3</p>
                    </div>
                </li>
                <li className="team-card">
                    <div className='team-member-card'>
                        <h2 className='team-card-title'>Is it okay to bring my child to Rising Stars if they're sick?</h2>
                    </div>
                    <div className='team-member-card2'> 
                        <p>youre hovering over me :3</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
