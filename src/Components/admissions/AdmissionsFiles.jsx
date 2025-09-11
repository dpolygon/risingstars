import React from 'react'

import { FiArrowDownCircle } from "react-icons/fi";
import { config } from '../../Constants'


export default function AdmissionsFiles() {

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 150px)', gap:'1rem', width: '100%', paddingTop: '70px', justifyContent: 'center', alignItems: 'center'}}>
        <FilesCell
            title="Allergy Alert"
            fileName="AllergyAlert.pdf"
        />
        <FilesCell
            title="Diaper Rash Ointment Permit"
            fileName="DiaperRashOintmentPermit.pdf"
        />
        <FilesCell
            title="Emergency Contact List"
            fileName="EmergencyContactList.pdf"
        />
        <FilesCell
            title="Feeding Instructions"
            fileName="FeedingInstructions.pdf"
        />
        <FilesCell
            title="Operational Discipline & Guidance Policy"
            fileName="OperationalDisciplineAndGuidancePolicy.pdf"
        />
        <FilesCell
            title="Operational Policy On Infant Safe Sleep"
            fileName="OperationalPolicyOnInfantSafeSleep.pdf"
        />
        <FilesCell
            title="Parent Agreement"
            fileName="ParentAgreement.pdf"
        />
        <FilesCell
            title="Parents Rights"
            fileName="ParentsRights.pdf"
        />
        <FilesCell
            title="Permission to Photograph"
            fileName="PermissionToPhotograph.pdf"
        />
        <FilesCell
            title="Policy Packet & Handbook"
            fileName="Handbook.pdf"
        />
        <FilesCell
            title="Sunscreen & Bug Repellent"
            fileName="SunscreenAndBugRepellent.pdf"
        />
        <FilesCell
            title="Download All"
            fileName="RequiredFormsForEnrollment.zip"
        />
    </div>
  )
}

const handleFileClick = (fileName) => {
    const urlToOpen = `${config.url.BACKEND_URL}/api/get-pdf/` + fileName;
    window.open(urlToOpen, '_blank');
}

const FilesCell = (props) => (
    <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
            width: '150px',
            color: 'rgb(0, 122, 225)',
            backgroundColor: 'rgb(229, 229, 234)',
            borderRadius: '20px',
            padding: '3%',
            cursor: 'pointer'
    }}
            onClick={() => handleFileClick(props.fileName)}
    >
        <p style={{textAlign: 'center', paddingBottom: '10px'}}>{props.title}</p>
        <FiArrowDownCircle/>
    </div>
)


