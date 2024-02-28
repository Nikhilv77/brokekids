import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  background-color: black;
  color: #ffdf00;
  position: relative;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    user-select: none;
    font-family: "Caveat", cursive !important;
    color: #fff;
    transform: rotate(-12deg);
  }
`

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
   font-family: "Righteous", sans-serif !important;
    font-weight: 520 !important;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Righteous", sans-serif !important;
  font-weight: 520 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`

const FooterSection = () => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const handleScroll = (id) => {
    let elem = document.querySelector(id)
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Section>
      <LogoContainer>
     <h1>BrokeKids</h1>
      </LogoContainer>
      <FooterComponent
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
         <ul>
          <li aria-hidden="true" onClick={() => window.location.href = '/'}>
            Home
          </li>
          <li aria-hidden="true" onClick={() => window.location.href = '/about-us'}>
            About us
          </li>
          <li aria-hidden="true" onClick={() => window.location.href = '/mysteries'}>
            Mysteries
          </li>
          <li aria-hidden="true" onClick={() => window.location.href = '/contact-us'}>
            Reach out
          </li>
        </ul>
        <Bottom>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Made With ❤ by Niki
          </span>

          <span>
            brokekids&copy;2024.
            <br />
            All Rights Reserved.
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  )
}

export default FooterSection
