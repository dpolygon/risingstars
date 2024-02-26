import React from 'react'

import Footer from '../Components/Footer';
import InfoCards from '../Components/parents/InfoCards';
import InfoSplash from '../Components/parents/InfoSplash';

export default function Parents() {
  return (
    <div className='Parents'>
        <InfoSplash/>
        <InfoCards/>
        <Footer/>
    </div> 
  )
}
