import React, { useState } from 'react'

export default function ProgramButtons(props) {
    const [activeButton, setActiveButton] = useState('Infants');

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <ProgramButton 
                text='Infants' 
                btnColor='black' 
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}
            />
            <ProgramButton 
                text='Toddlers' 
                btnColor='rgb(213, 213, 213)'
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}

            />
            <ProgramButton 
                text='Early Preschool' 
                btnColor='rgb(213, 213, 213)'
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}

            />
            <ProgramButton 
                text='Preschool' 
                btnColor='rgb(213, 213, 213)'
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                setPrograms={props.setProgram}

            />
        </div>
    );
}

const ProgramButton = (props) => (
    <div 
        style={{
            backgroundColor: props.activeButton === props.text ? 'black' : 'rgb(213, 213, 213)',
            border: '1px solid var(--primary)',
            padding: '8px 20px',
            borderRadius: '33px',
            margin: '10px',
            cursor: 'pointer'
        }}
        onClick = {() => {props.setActiveButton(props.text); 
                        props.setPrograms(props.text)}}
    >
        <p style={{color: 'white', fontSize: '20px'}}>{props.text}</p>
    </div>
);