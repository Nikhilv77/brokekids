import React from 'react'
import styled from 'styled-components'

import { Text, Box, Stack } from '@mantine/core'

// Define icons as objects with keys corresponding to the icon names
const icons = {
  'ri-mail-fill': {
    title: 'Email',
    description: 'nikhilv7@yahoo.com',
  },
  'ri-phone-fill': {
    title: 'Phone',
    description: '+91 7208291301',
  },

  'ri-sun-fill': {
    title: 'Working hours',
    description: '12 p.m. – 8 p.m.',
  },
}

// Styled components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
`

const Icon = styled(Box)`
  margin-right: var(--mantine-spacing-md);
  background-color: transparent;
`

const Title = styled(Text)`
  color: #fff !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  font-family: "Righteous", sans-serif !important;
  font-size: 1.4rem !important;
  @media screen and (max-width: 720px) {
    font-size: 1rem !important;
  }
`

const Description = styled(Text)`
  
  font-size: 1.3rem !important;
  color: #fff !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  font-family: "Righteous", sans-serif !important;

  @media screen and (max-width: 720px) {
    font-size:1rem !important;
  }
`

// Function to generate icon elements
function ContactIconsList() {
  const items = Object.keys(icons).map((iconKey, index) => {
    const icon = icons[iconKey]
    return (
      <Wrapper key={index}>
        <Icon mr="md">
          <i className={iconKey} style={{ fontSize: '1.6rem' }} />
        </Icon>
        <div>
          <Title size="xs">{icon.title}</Title>
          <Description>{icon.description}</Description>
        </div>
      </Wrapper>
    )
  })

  return <Stack>{items}</Stack>
}

export default ContactIconsList
