import React from 'react'
import { Container, Title, Accordion } from '@mantine/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ansOne = `
  Because She is Ginger.
`
const ansTwo = `
Nikhil is the coolest member in Broke kids.
`
const ansThree = `
Because she is RCB.
`
const ansFour = `
Because there is something special.
`
const ansFive = `
Because he has 6 kids.
`

const FaqWrapper = styled(motion(Container))`
  padding-top: calc(var(--mantine-spacing-xl) * 4);
  padding-bottom: calc(var(--mantine-spacing-xl) * 0.4);
  min-height: 650px;
  font-family: "Righteous", sans-serif !important;
  color: #ffdf00;
`

const FaqTitle = styled(motion(Title))`
  margin-bottom: calc(var(--mantine-spacing-xl) * 1.5);
  font-family: "Righteous", sans-serif !important;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
    font-family: "Righteous", sans-serif !important;
  font-size: 2.3rem;
  @media (max-width: 720px) {
    font-size: 2.1rem !important;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem !important;
  }
`

const FaqAccordionItem = styled(motion(Accordion.Item))`
  color: black !important;
  
  font-size: 1.4rem;
  background-color: #ffdf00;
  border-radius: 0.3rem;
  border: none;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 1rem !important;
  }
`

const FaqAccordionControl = styled(motion(Accordion.Control))`
 color: #fff;

text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
  1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
  2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  font-size: 1.4rem;
  border: none;
  font-weight: 600;
  font-family: "Righteous", sans-serif !important;
  @media (max-width: 720px) {
    font-size: 1.1rem !important;
  }
`

const FaqAccordionPanel = styled(motion(Accordion.Panel))`
  font-family: "Righteous", sans-serif !important;
  color: #fff;

  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
`

const Faqs = () => {
  return (
    <FaqWrapper
      size="md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaqTitle
        ta="center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
       Mysteries about Broke kids
      </FaqTitle>

      <Accordion variant="separated">
        <FaqAccordionItem
          value="reset-password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaqAccordionControl>
           Why Ginger is Called Riya?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansOne}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="another-account"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaqAccordionControl>
            Who is the coolest member in Broke kids?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansTwo}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="newsletter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaqAccordionControl>
            Why Revathi likes RCB?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansThree}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="credit-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <FaqAccordionControl>
            Why Raj wants to go Qatar?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansFour}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="payment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FaqAccordionControl>
            What makes arjun Andhi?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansFive}</FaqAccordionPanel>
        </FaqAccordionItem>
      </Accordion>
    </FaqWrapper>
  )
}

export default Faqs
