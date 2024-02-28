import React from 'react'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme,Title } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import ContactUs from '../components/contactus/ContactUs'
import { useEffect } from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components'


const ContactPage = () => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const theme = createTheme({})


  const ContactTitle = styled(motion(Title))`

  font-family: "Righteous", sans-serif !important;
  color: #ffdf00;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
    font-family: "Righteous", sans-serif !important;
  font-size: 3rem;
  @media (max-width: 720px) {
    font-size: 2.1rem !important;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem !important;
  }
`
  return (
    <div style={{ backgroundColor: 'black',display:'grid', gap:"2rem" }}>
      <SecondNavbar />
      <MantineProvider theme={theme}>
      <div style={{ height:'20vh', display:'flex', justifyContent:'center', alignItems:'center', width:'78vw', margin:'auto',marginTop:'11vh'}}>
      <ContactTitle
        ta="center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
       Get to know us
      </ContactTitle>
        </div>
        <ContactUs />
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default ContactPage
