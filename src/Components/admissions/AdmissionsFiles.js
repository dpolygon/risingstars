import React from 'react'

import { FiArrowDownCircle } from "react-icons/fi";

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
    const urlToOpen = 'http://127.0.0.1:5000/api/get-pdf/' + fileName;
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
            backgroundColor: 'lightgrey',
            borderRadius: '20px',
            padding: '3%'
    }}
            onClick={() => handleFileClick(props.fileName)}
    >
        <p style={{textAlign: 'center', paddingBottom: '10px'}}>{props.title}</p>
        <button style={{background: 'transparent', border: 'none', fontSize: '17px'}}><FiArrowDownCircle /></button>
    </div>
)


