import React from 'react'

import './OurValues.css'

import { IoRocket } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";

export default function OurValues() {
  return (
    <div style={{backgroundColor: '#f5f5f7', paddingTop: '110px', paddingBottom: '70px'}}>
        <div style={{padding: '3%'}}>
            <h1 className='valuesTitle'>Our Values</h1>
            <p className='valuesDesc'>
                At Rising Stars, we are dedicated to caring for the whole child. Our diverse community includes children, 
                families, and teachers from various countries and walks of life. Each day presents a valuable opportunity 
                for exploration, making friends, and personal growth. Our committed teachers are here to support and nurture 
                your child's development in every aspect—cognitive, social, emotional, and physical—making every day a meaningful 
                step in their journey.
            </p>
            <div className='cells'>
                <ValueCell 
                    imageUrl='./images/homepagephotos/curiosity.webp'
                    icon={RiLightbulbFlashLine}
                    value='Curiosity'
                    desc="We celebrate your child's boundless curiosity by nurturing their insatiable desire to explore and discover."
                />
                <ValueCell
                    imageUrl='./images/homepagephotos/empathy.webp'
                    icon={FaChildren}
                    value='Empathy'
                    desc="Here, their unique journey is understood, ensuring they feel valued, secure, and cherished."
                />
                <ValueCell
                    imageUrl='./images/homepagephotos/explore.webp'
                    icon={IoRocket}
                    value='Exploration'
                    desc="Through our programs, we ignite a passion for discovery, fostering a lifelong love of learning."
                />
            </div>
        </div>
    </div>
  )
}

const ValueCell = (props) => (
    <div className='valueCell' style={{
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
            height: '100%',
            width: '100%',
            padding: '16%',
            backdropFilter: 'brightness(40%) saturate(200%)',
            WebkitBackdropFilter: 'brightness(40%) saturate(200%)',
        }}>
            <props.icon style={{fontSize: '6rem'}}/>
            <h2 style={{borderBottom: '3px solid white', paddingBottom: '1rem'}}>{props.value}</h2>
            <p style={{paddingTop: '1rem', textAlign: 'center', fontWeight: '600'}}>{props.desc}</p>
        </div>
    </div>
);