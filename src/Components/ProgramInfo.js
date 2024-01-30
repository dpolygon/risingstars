import React from 'react'

import './ProgramInfo.css'
import programsData from '../data/programsData.json'

export default function ProgramInfo(prop) {

    return (
        <div style={{display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    marginTop: '50px', 
                    height: '100%'
        }}>
            <InfoLeft program={prop.selectedProgram}/>
            <InfoMiddle program={prop.selectedProgram}/>
            <InfoRight program={prop.selectedProgram}/>
        </div>
    );

}

const InfoLeft = (prop) => (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '31.6%'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '70%'}}>
            <h1 style={{fontSize: '4rem', fontWeight: '600'}}>{programsData[prop.program].title}</h1>
            <p style={{paddingTop: '15px', fontSize: '1rem'}}>{programsData[prop.program].desc1}</p>
        </div>
        <div style={{paddingTop: '2rem'}}>
            <p style={{fontSize: '2rem'}}>{programsData[prop.program].milestones}</p>
            <h2 style={{paddingTop: '1rem'}}>{programsData[prop.program].mile1}</h2>
            <p className='miles'>{programsData[prop.program].mile1d}</p>
            <h2 className='miles'>{programsData[prop.program].mile2}</h2>
            <p className='miles'>{programsData[prop.program].mile2d}</p>
            <h2 className='miles'>{programsData[prop.program].mile3}</h2>
            <p className='miles'>{programsData[prop.program].mile3d}</p>
            <h2 className='miles'>{programsData[prop.program].mile4}</h2>
            <p className='miles'>{programsData[prop.program].mile4d}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '1rem'}}>{programsData[prop.program].desc2}</p>
            <img src={programsData[prop.program].pic1} style={{marginTop: '20px', borderRadius: '10px', objectFit: 'cover', height: '25vh'}}></img>
        </div>
    </div>
);

const InfoMiddle = (prop) => (
    <img style={{width: '36.6%', borderRadius: '10px', objectFit: 'cover'}} src={programsData[prop.program].pic2}></img>
);

const InfoRight = (prop) => (
    <div style={{display: 'flex', flexDirection: 'column', width: '26.6%', justifyContent: 'space-evenly'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start'}}>
            <img src={programsData[prop.program].pic3} style={{height: '300px', width: '100%', objectFit: 'cover', borderRadius: '10px'}}></img>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '2rem'}}>{programsData[prop.program].activities}</p>
            <p>{programsData[prop.program].title2}</p>
            <h2 style={{paddingTop: '1rem'}}>{programsData[prop.program].act1}</h2>
            <p className='acts'>{programsData[prop.program].act1d}</p>
            <h2 className='acts'>{programsData[prop.program].act2}</h2>
            <p className='acts'>{programsData[prop.program].act2d}</p>
            <h2 className='acts'>{programsData[prop.program].act3}</h2>
            <p className='acts'>{programsData[prop.program].act3d}</p>
            <h2 className='acts'>{programsData[prop.program].act4}</h2>
            <p className='acts'>{programsData[prop.program].act4d}</p>
            <h2 className='acts'>{programsData[prop.program].act5}</h2>
            <p className='acts'>{programsData[prop.program].act5d}</p>
        </div>
    </div>
);