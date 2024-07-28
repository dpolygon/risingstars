import React from 'react'

import './ProgramInfo.css'
import programsData from '../../data/programsData.json'
import MoreDetail from '../MoreDetail';

export default function ProgramInfo(prop) {

    return (
        <div className='progInfo'>
            <img className='infoH' src={programsData[prop.selectedProgram].pic2}/>
            <div style={{display: 'flex', flexDirection: 'column', width: '75%', marginTop: '3vh'}}>
                <h1 className='progTitle'>{programsData[prop.selectedProgram].title}</h1>
                <p className='progDesc'>{programsData[prop.selectedProgram].desc1}</p>
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
        <MoreDetail title={programsData[prop.program].mile1} insideText={programsData[prop.program].mile1d}/>
        <MoreDetail title={programsData[prop.program].mile2} insideText={programsData[prop.program].mile2d}/>
        <MoreDetail title={programsData[prop.program].mile3} insideText={programsData[prop.program].mile3d}/>
        <MoreDetail title={programsData[prop.program].mile4} insideText={programsData[prop.program].mile4d}/>
        <img className='leftImg' src={programsData[prop.program].pic1} style={{marginTop: '4vh', borderRadius: '10px', objectFit: 'cover', height: '35vh'}}></img>
    </div>
);

const InfoMiddle = (prop) => (
    <img className='infoM' style={{width: '36.6%', borderRadius: '10px', objectFit: 'cover', height: '85vh'}} src={programsData[prop.program].pic2}></img>
);

const InfoRight = (prop) => (
    <div className='infoR' style={{display: 'flex', flexDirection: 'column'}}>
        <img src={programsData[prop.program].pic3} style={{height: '300px', objectFit: 'cover', borderRadius: '10px'}}></img>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '4vh'}}>
            <h1>{programsData[prop.program].activities}</h1>
            <p style={{fontWeight: '500'}}>{programsData[prop.program].title2}</p>
            <MoreDetail title={programsData[prop.program].act1} insideText={programsData[prop.program].act1d}/>
            <MoreDetail title={programsData[prop.program].act2} insideText={programsData[prop.program].act2d}/>
            <MoreDetail title={programsData[prop.program].act3} insideText={programsData[prop.program].act3d}/>
            <MoreDetail title={programsData[prop.program].act4} insideText={programsData[prop.program].act4d}/>
            <MoreDetail title={programsData[prop.program].act5} insideText={programsData[prop.program].act5d}/>
        </div>
    </div>
);