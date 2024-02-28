import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/4-1.png'
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
 bottom: 10%;
  left: -100%;
  width: 45%;
  height: 75vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const TitleContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 27%;
  right: 14%;

  @media screen and (max-width: 1120px) {
    top: 10%;
    left: 25%;
    right: 25%;
  }
  @media screen and (max-width: 620px) {
    top: 15%;
  }
  @media screen and (max-width: 390px) {
    width: 65%;
  }
`
const TextContainer = styled.div`
  width: 40%;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1.4rem;
  top: 16%;
  right: 14%;
  /* text-align: justify; */

  @media screen and (max-width: 1120px) {
    top: 30%;
    width: 50%;
  }
  @media screen and (max-height: 600px) {
    top: 20%;
  }
  @media screen and (max-width: 400px) {
    top: 17%;
    width: 50%;
  }
`

const Title = styled.h1`
  text-align: start;
  font-size: calc(
    3.1em + 1vw
  ); /* Adjust the font size based on viewport width */
  z-index: 101;
  text-transform: capitalize;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
    font-family: "Righteous", sans-serif !important;
  color: #ffdf00;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 1120px) {
    font-size: calc(2.4em + 1vw); /* Adjust font size for smaller screens */
  }
  @media screen and (max-width: 625px) {
    font-size: calc(2em + 1vw); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`
   color: #fff;
  font-weight: 500;
  font-family: "Caveat", cursive !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  font-size: calc(1.8em + 1vw);
  line-height: 1.8;
  z-index: 101;
  text-transform: 0 0 4px #fff;



  @media screen and (max-width: 1120px) {
    font-size: calc(1.2em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1em + 1vw);
  }
`


const FifthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const ImageRef1 = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)
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
       
        left: '-2%',
        bottom:"10%",
        zIndex: 5,
        scale: 1,
       
      })

    elements('h1').forEach((el) =>
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
    subElements('button').forEach((el) =>
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

  return (
    
      <Section ref={sectionRef}>
      
        <TitleContainer ref={titleRef}>
          <Title>Ayyy bro, wassup</Title>
        </TitleContainer>
        <TextContainer ref={textRef}>
          <Text>
           Dude like I went to the hospital okay, and basically.. basiiically they were saying this is a restraunt. I mean wtf bro.
          </Text>
        
        </TextContainer>
        <I1 ref={ImageRef1} src={Image1}/>
      </Section>
   
  )
}

export default FifthSection
