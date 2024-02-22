import React from 'react'

import './InfoCards.css'

import Button from '../Button'

export default function InfoCards() {

    const handleHandbookClick = () => {

    }

  return (
    <div style={{padding: '3%', paddingTop: '80px'}}>
        <ul className="info-grid">
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>When are Rising Stars' holiday and scheduled closure dates?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How will parents be informed about bad weather closures?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>Is it okay to bring my child to Rising Stars if they're sick?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>Who is authorized to pick up a child from Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>What is the process for enrolling my child at Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>What is the curriculum or daily schedule like at Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How are meals and snacks handled at Rising Stars?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How does Rising Stars handle discipline and behavior management?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>What security measures are in place at Rising Stars to ensure my child's safety?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content'>
                    <h2 className='info-card-title'>How does Rising Stars communicate with parents about their child's progress and daily activities?</h2>
                </div>
                <div className='card-content2'> 
                    <p>youre hovering over me :3</p>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content-handbook'>
                    <h2 className='info-card-title'>Have a question? Want to read our handbook? Access it below!</h2>
                    <div style={{paddingTop: '1rem'}}>
                        <Button buttonSize='btn-large' buttonStyle='btn-primary' onClick={handleHandbookClick} children='Click Me!'/>
                    </div>
                </div>
            </li>
            <li className="info-card">
                <div className='card-content-handbook'>
                    <h2 className='info-card-title'>Have a question? Want to call or message us instead?</h2>
                    <div style={{paddingTop: '1rem'}}>
                        <Button buttonSize='btn-large' buttonStyle='btn-primary' onClick={handleHandbookClick} children='Contact Us'/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
