import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/15-1.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Marquee from 'react-fast-marquee'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: black;
  overflow: hidden;
`
const I1 = styled.img`
  position: absolute;
 top: -100%;
right: 14%;
  width: 13%;
  height: 43vh;
  object-fit: contain;

border-radius: 50%;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  top: 4%;
  left: 14%;

  & > *:nth-child(1) {
    margin-right: 1rem;
  }
`

const Title = styled.h1`
  font-size: calc(
    3.5em + 1vw
  ); /* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
    filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1));
    font-family: "Righteous", sans-serif !important;
  color: #ffdf00;

  @media screen and (max-width: 1120px) {
    /* Adjust font size for smaller screens */
    font-size: calc(2.4em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(
      1.8em + 1vw
    ); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`

  font-size: calc(1.4em + 1vw);
  line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  color: #fff;
  font-weight: 500;
  font-family: "Caveat", cursive !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 1120px) {
    font-size: calc(1em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.9em + 1vw);
  }
`


const SixthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const ImageRef1 = useRef(null)

  const textRef = useRef(null)


  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current

    console.log('worked')
    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(ImageElem1, {
        scale: 1,
       
        right: '23%',
        top:"31%",
        zIndex: 5,
        scale: 1.5,
      
        transitionDuration:0.6
       
      })

    subElements('h1').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
    subElements('p').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
   

    return () => {
      if (t2) t2.kill()
    }
  }, [])
  const MarqueeH1 = styled.h1`

  font-family: Hauora, monospace;
  color: #fff;
  font-size: 4.3rem;
  /* background-color: #ffdf00; */

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }
`
  return (
  
      <Section ref={sectionRef}>
      
      <TextContainer ref={textRef}>
          <Title>Ek second, Ek second</Title>
          <Text>
            {' '}
            Dude like I went to the hospital okay, and basically.. basiiically they were saying this is a restraunt. I mean wtf bro
          </Text>
         
        </TextContainer>
        <I1 ref={ImageRef1} src={Image1}/>
      </Section>
   
      
  )
}

export default SixthSection
