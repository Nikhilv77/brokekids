import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeaderImage from '../header-image/HeaderImage'
import Marquee from 'react-fast-marquee'

const Title = styled(motion.div)`
  overflow: hidden;
  height: 0;
  transition: all 1s ease;
  z-index: 5;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 background-color: black;
  div {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }
  h1 {
    font-family: "Righteous", sans-serif !important;
    text-align:center;
    line-height: 1.3;
    color: #ffdf00;
  text-shadow: 1px 1px 0px #383838, 1px 1px 0px #383838, 1px 1px 0px #383838,
    1px 1px 0px #383838, 2px 2px 0px #383838, 3px 3px 0px #383838, 3px 3px 0px #383838,
    4px 4px 0px #383838, 4px 4px 0px #383838, 5px 5px 0px #383838;
  text-transform: capitalize;
    font-size: 3.5em;
    /* text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                4px 4px 0px #333;
  */

    user-select: none;
    @media (max-width: 800px) {
      font-size: 2.8em;
    }
    @media (max-width: 600px) {
      font-size: 2.6em;
    }
    @media (max-width: 500px) {
      font-size: 2.4em;
    }
    @media (max-width: 400px) {
      font-size: 2.2em;
    }
  }

  h2 {
    color: #fff;
  font-weight: 500;
  font-family: "Caveat", cursive !important;
    text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                4px 4px 0px #333 !important;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-size: clamp(1.1em, 2.2em, 2.2em);
    text-transform: capitalize;
    user-select: none;
    /* color: #b0b0b0; */
    text-align: center;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    @media (max-width: 768px) {
      font-size: 1em;
      width: 70%;
    }
  }
`
const MarqueeH1 = styled(motion.h1)`
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    3px 3px 0px #333, 3px 3px 0px #333, 4px 4px 0px #333 !important;
    font-family: "Righteous", sans-serif !important;
    color: #ffdf00;
  font-size: 4.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }
`

const Header = () => {
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition: {
      delay: 6,
      duration: 2,
    },
  }

  return (
    <div style={{ marginTop: '12vh' }}>
      <Title
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          height: '20rem',
        }}
        transition={{
          delay: 2.5,
          duration: 1.4,
        }}
      >
        <motion.div>
          <motion.h1>Its fun Being Broke</motion.h1>
        </motion.div>

        <motion.h2>
        We all smiled, but not that much, and frowned but rarely cried. Nobody could succeed here, but most people around us seemed to be okay with that. It meant they wouldn't fail either.
        </motion.h2>
      </Title>
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          height: '6rem',
        }}
        transition={{
          delay: 3.5,
          duration: 1.2,
        }}
      >
        <Marquee speed={190}>
          <MarqueeH1
            whileHover={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
          >
            Explore. Engage. Embrace
          </MarqueeH1>
        </Marquee>
      </motion.div>

      <HeaderImage />
    </div>
  )
}

export default Header
