import React from 'react'

import './ProgramInfo.css'
import programsData from '../data/programsData.json'

export default function ProgramInfo(prop) {

    return (
        <div className='progInfo'>
            <img className='infoH' src={programsData[prop.selectedProgram].pic2}/>
            <div style={{display: 'flex', flexDirection: 'column', width: '75%', marginTop: '4vh'}}>
                <h1 style={{fontSize: '4rem', fontWeight: '600'}}>{programsData[prop.selectedProgram].title}</h1>
                <p style={{paddingTop: '15px', fontSize: '1rem'}}>{programsData[prop.selectedProgram].desc1}</p>
            </div>
            <div className='progInfoMain'>
                <InfoLeft program={prop.selectedProgram}/>
                <InfoMiddle program={prop.selectedProgram}/>
                <InfoRight program={prop.selectedProgram}/>
            </div>
        </div>
    );

}

const InfoLeft = (prop) => (
    <div className='infoL' style={{display: 'flex', flexDirection: 'column'}}>
        <h1>{programsData[prop.program].milestones}</h1>
        <h3 style={{paddingTop: '1rem'}}>{programsData[prop.program].mile1}</h3>
        <p className='miles'>{programsData[prop.program].mile1d}</p>
        <h3>{programsData[prop.program].mile2}</h3>
        <p className='miles'>{programsData[prop.program].mile2d}</p>
        <h3>{programsData[prop.program].mile3}</h3>
        <p className='miles'>{programsData[prop.program].mile3d}</p>
        <h3>{programsData[prop.program].mile4}</h3>
        <p className='miles'>{programsData[prop.program].mile4d}</p>
        <img className='leftImg' src={programsData[prop.program].pic1} style={{marginTop: '4vh', borderRadius: '10px', objectFit: 'cover', height: '25vh'}}></img>
    </div>
);

const InfoMiddle = (prop) => (
    <img className='infoM' style={{width: '36.6%', borderRadius: '10px', objectFit: 'cover'}} src={programsData[prop.program].pic2}></img>
);

const InfoRight = (prop) => (
    <div className='infoR' style={{display: 'flex', flexDirection: 'column'}}>
        <img src={programsData[prop.program].pic3} style={{height: '300px', objectFit: 'cover', borderRadius: '10px'}}></img>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '4vh'}}>
            <h1>{programsData[prop.program].activities}</h1>
            <p>{programsData[prop.program].title2}</p>
            <h3 style={{paddingTop: '1rem'}}>{programsData[prop.program].act1}</h3>
            <p className='acts'>{programsData[prop.program].act1d}</p>
            <h3>{programsData[prop.program].act2}</h3>
            <p className='acts'>{programsData[prop.program].act2d}</p>
            <h3>{programsData[prop.program].act3}</h3>
            <p className='acts'>{programsData[prop.program].act3d}</p>
            <h3>{programsData[prop.program].act4}</h3>
            <p className='acts'>{programsData[prop.program].act4d}</p>
            <h3>{programsData[prop.program].act5}</h3>
            <p className='acts'>{programsData[prop.program].act5d}</p>
        </div>
    </div>
);