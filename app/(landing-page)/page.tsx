import React from 'react'
import Navbar from './Navbar/Navbar'
import FirstSction from './FirstSection/page'
import SecondSection from './SecondSction/page'
import ThirdSection from './ThirdSection/page'
import FourSection from './FourSection/page'
import FiveSection from './FiveSection/page'
import SevenSection from './SevenSection/page'
import EightSection from './EightSection/page'
import SixSection from './SixSection/page'
import Footer from './Footer/page'

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <FirstSction />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <SixSection/>
      <SevenSection/>
      <EightSection/>
      <Footer/>
    </div>
  )
}
