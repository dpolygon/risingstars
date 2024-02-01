import React from 'react'

import './OurValues.css'

import { IoRocket } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";

export default function OurValues() {
  return (
    <div style={{padding: '3%'}}>
        <h1 style={{fontSize: '5rem'}}>Our Values</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2rem'}}>
            <ValueCell 
                imageUrl='./images/homepagephotos/curiosity.jpg'
                icon={RiLightbulbFlashLine}
                value='Curiosity'
                desc="We celebrate your child's boundless curiosity by nurturing their insatiable desire to explore and discover."
            />
            <ValueCell
                imageUrl='./images/homepagephotos/empathy.jpg'
                icon={FaChildren}
                value='Empathy'
                desc="Here, their unique journey is understood, ensuring they feel valued, secure, and cherished."
            />
            <ValueCell
                imageUrl='./images/homepagephotos/explore.jpg'
                icon={IoRocket}
                value='Exploration'
                desc="Through our programs, we ignite a passion for discovery, fostering a lifelong love of learning."
            />
        </div>
        <p style={{fontSize: '1.5rem', paddingTop: '2rem', textAlign: 'center'}}>Every day is an opportunity to explore, make friends, and grow. Our teachers support and nurture your child’s cognitive, social, emotional, and physical development.</p>
    </div>
  )
}

const ValueCell = (props) => (
    <div style={{
        borderRadius: '50px',
        height: '40vh',
        width: '40vh',
        backgroundImage: "url(" + props.imageUrl + ")",
        backgroundSize: 'cover'
    }}>
        <div style={{    
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: '50px',
            height: '40vh',
            width: '40vh',
            padding: '16%',
            WebkitBackdropFilter: 'brightness(40%) saturate(200%)',
        }}>
            <props.icon style={{fontSize: '6rem'}}/>
            <h2 style={{borderBottom: '3px solid white', paddingBottom: '1rem'}}>{props.value}</h2>
            <p style={{paddingTop: '1rem', textAlign: 'center'}}>{props.desc}</p>
        </div>
    </div>
);