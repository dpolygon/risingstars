import react from 'react'

import './ourteam.css'

import TeamSplash from '../Components/team/TeamSplash';
import TheTeam from '../Components/team/TheTeam';
import Footer from '../Components/Footer';

export default function OurTeam() {
    return (
        <div className='OurTeam'>
            <TeamSplash/>
            <p style={{padding: '3%', textAlign: 'center', fontSize: '50px', fontWeight: '700'}}>WITH OUR APPROACH, WE NURTURE CHILDREN'S CURIOSITY AND TURN THEIR POTENTIAL INTO SKILLS THAT HELP THEM GROW CONFIDENTLY, CREATING A STRONG FOUNDATION FOR THEIR FUTURE.</p>
            <TheTeam/>
            <p style={{padding: '3%', textAlign: 'center', fontSize: '50px', fontWeight: '700', marginTop: '70px', marginBottom: '110px'}}>OUR TEAM IS MORE THAN JUST CARING FACES AND EDUCATORS. WE PROVIDE A SAFE SPACE FOR CHILDREN TO EXPLORE AND DISCOVER THE WORLD AROUND THEM.</p>
            <Footer/>
        </div>
    );
}