/* eslint-disable react-hooks/exhaustive-deps */
import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image1 from '../assets/bk assets/2-1.jpg'
import Image2 from '../assets/bk assets/34.png'
import Marquee from 'react-fast-marquee'
const Section = styled.section`
  width: 100vw;
 min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const I1 = styled.img`
  position: absolute;
  top: -100%;
  left: 10%;
  border-radius: 2rem;
  width: 20%;

  height: 55vh;
  object-fit: contain;
  z-index: 2;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  @media screen and (max-width: 30em) {
    height: 70vh;
    top: 10%;

  }
`

const I2 = styled.img`
  position: absolute;
  right: -100%;
  width: 18%;
  top: 40%;
  height: 58vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`

const TitleContainer = styled.div`
  width: 30%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);


  @media screen and (max-width: 1120px) {
    top: 10%;
    left: 25%;
    right: 25%;
  }
  @media screen and (max-width: 620px) {
    top: 15%;
  }
`
const TitleContainer2 = styled.div`
  width: 30%;
  
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  position: absolute;
 
  left: 50%;
  /* transform: translate(-50%,-50%); */
  bottom: -60%;


  @media screen and (max-width: 1120px) {
    top: 10%;
    left: 25%;
    right: 25%;
  }
  @media screen and (max-width: 620px) {
    top: 15%;
  }
`


const Title = styled.h1`
  font-size: calc(
    3.3em + 1vw
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
    font-size: calc(2.6em + 1vw); /* Adjust font size for smaller screens */
  }
  @media screen and (max-width: 625px) {
    font-size: calc(
      2.2em + 1vw
    ); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`
  font-family: Hauora, monospace !important;
  font-size: calc(1.2em + 1vw);
  line-height: 1.8;
  z-index: 101;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  color: #b0b0b0;
  font-family: 'Times Roman';
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 1120px) {
    font-size: calc(1.2em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1em + 1vw);
  }
`



const MarqueeH1 = styled.h1`
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    3px 3px 0px #333, 3px 3px 0px #333, 4px 4px 0px #333 !important;
  font-family: Hauora, monospace;
  color: #fff;
  font-size: 4.3rem;
  background-color: #ffdf00;

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }
`

const SecondSection = () => {
  console.log('logged second')

  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const firstTextRef = useRef(null)
  const secondTextRef = useRef(null)



  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current
    const firstTextelem = firstTextRef.current;
    const secondTextElem = secondTextRef.current

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
          end: `bottom+=700 bottom`,
          scrub: 1,
        },
      })
      .to(ImageElem1, { top: '25%',  scale: 1.3, }, 'key1') .to(firstTextelem, { top: '-18%',  scale: 1,delay:0 })
      .to(ImageElem2, { top: '28%', right: '5%', scale: 1.3 }, 'key2')
      .to(secondTextElem, { top: '45%', scale: 1,},"key2")
 
   
    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (
    <div>
      <Section ref={sectionRef}>
       
        <TitleContainer ref={firstTextRef}>
          <Title>Ginger is my bestfriend!</Title>
        </TitleContainer>
        

        <TitleContainer2 ref={secondTextRef}>
          <Title>Are You Sure Bro?</Title>
        </TitleContainer2>
       
        

        <I1 ref={ImageRef1} src={Image1} />
        <I2 ref={ImageRef2} src={Image2} />
      </Section>

      <div
        style={{
          backgroundColor: 'black',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <Marquee speed={250} direction="right">
          <MarqueeH1
            whileHover={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            }}
          >
  💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀
          </MarqueeH1>
        </Marquee>
      </div>
    </div>
  )
}

export default SecondSection
