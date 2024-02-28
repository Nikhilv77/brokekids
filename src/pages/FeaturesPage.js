import React from 'react'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import HeroSection from '../features-sections/HeroSection'
import FirstSection from '../features-sections/FirstSection'
import Footer from '../home-sections/FooterSection'

const FeaturesPage = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <SecondNavbar />
      <HeroSection />
      <FirstSection />
      <Footer />
    </div>
  )
}

export default FeaturesPage
