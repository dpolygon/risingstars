import React, { useState } from 'react'

import './ProgramButtons.css'

export default function ProgramButtons(props) {
    const [activeButton, setActiveButton] = useState('Infants');

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProgramButton 
                text='Infants' 
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}
            />
            <ProgramButton 
                text='Toddlers' 
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}
            />
            <ProgramButton 
                text='Early Preschool' 
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}
            />
            <ProgramButton 
                text='Preschool' 
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}
            />
        </div>
    );
}

const ProgramButton = (props) => (
    <div className='progButtons'
        style={{
            backgroundColor: props.activeButton === props.text ? 'rgb(20, 23, 26)' : 'rgb(229, 229, 234)'
        }}
        onClick = {() => {props.setActiveButton(props.text); 
                        props.setPrograms(props.text)}}
    >
        <p className={props.activeButton === props.text ? 'progBttnTextActive' : 'progBttnText'}>{props.text}</p>
    </div>
);