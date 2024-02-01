import React from 'react'
import Navbar from './Navbar/Navbar'
import FirstSction from './FirstSection/page'
import SecondSection from './SecondSction/page'
import ThirdSection from './ThirdSection/page'
import FourSection from './FourSection/page'

export default function LandingPage() {
  return (
    <div>
       <Navbar/>
       <FirstSction/>
       <SecondSection/>
       <ThirdSection/>
       <FourSection/>
    </div>
  )
}
