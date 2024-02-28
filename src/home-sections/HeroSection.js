import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'

const Section = styled.section`
  position: relative;
  background-color: black;
  overflow: hidden;
  height: 100vh;
`

const HeroSection = () => {
  return (
    <Section>
      <Header />
    </Section>
  )
}

export default HeroSection
