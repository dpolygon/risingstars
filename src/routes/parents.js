import React from 'react'

import Footer from '../Components/Footer';
import InfoCards from '../Components/parents/InfoCards';
import InfoSplash from '../Components/parents/InfoSplash';

export default function Parents() {
  return (
    <div className='Parents' style={{background: 'url(./images/parentsbg.webp)', backgroundSize: 'cover', backgroundPosition: '20%'}}>
        <InfoSplash/>
        <InfoCards/>
        <Footer/>
    </div> 
  )
}
