import react from 'react'

import './ourteam.css'

import TeamSplash from '../Components/team/TeamSplash';
import TheTeam from '../Components/team/TheTeam';

export default function OurTeam() {
    return (
        <div className='OurTeam'>
            <TeamSplash/>
            <TheTeam/>
        </div>
    );
}