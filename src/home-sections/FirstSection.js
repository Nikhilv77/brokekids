import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/29.jpg'
import Image2 from '../assets/bk assets/2-1.jpg'
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
  
  border-radius: 2rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin: auto;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8));
`

const I2 = styled.img`
  position: absolute;
  top: -100%;

  left: -100%;
  border-radius: 2rem;
  width: 20%;
  height: 55vh;
  object-fit: contain;
  z-index: 2;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  @media screen and (max-width: 30em) {
    width: 30%;
    top: 10%;
  height: 70vh;
  }
`

const TitleContainer = styled.div`

  width: 40%;
  height: 60%;
  padding: 0.3rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 20%;
  right: 10%;

  @media screen and (max-width: 768px) {
    top: 30%;
    width: 50%;
    right: 5%;
  }
  @media screen and (max-width: 640px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    top: 34%;
    width: 55%;
  }
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-family: "Righteous", sans-serif !important;
  color: #ffdf00;
  z-index: 5;
  text-shadow: 1px 1px 0px #383838, 1px 1px 0px #383838, 1px 1px 0px #383838,
    1px 1px 0px #383838, 2px 2px 0px #383838, 3px 3px 0px #383838, 3px 3px 0px #383838,
    4px 4px 0px #383838, 4px 4px 0px #383838, 5px 5px 0px #383838;
  text-transform: capitalize;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2));

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
const SubTitle = styled.p`
  text-shadow: 1px 1px 0px #787878, 1px 1px 0px #787878, 1px 1px 0px #787878,
    1px 1px 0px #787878, 1px 1px 0px #787878, 2px 2px 0px #787878, 2px 2px 0px #787878,
    2px 2px 0px #787878, 1px 1px 0px #787878, 2px 2px 0px #787878;
  z-index: 999;
  font-size: 2.5rem;
  color: #fff;
  font-weight: 500;
  font-family: "Caveat", cursive !important;
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`

const FirstSection = () => {
  const sectionRef = useRef(null)

  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const ImageRef3 = useRef(null)
  const titleRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current

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
      .to(
        ImageElem1,
        { scale: 0.3, rotation: -15, left: '-40%',opacity:0,delay:0, },
        'key1'
      )
      .to(
        ImageElem2,
        { scale: 1.3, left: '15%', top: '25%',delay:0 },
        'key1'
      )
   

    elements('h1').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )
    
    elements('p').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )

    elements('button').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )
    return () => {
      if (t2) t2.kill()
    }
  }, [])


  return (

      <Section ref={sectionRef}>
        <I1 ref={ImageRef1} src={Image1} />
        <I2 ref={ImageRef2} src={Image2} />
        <TitleContainer ref={titleRef}>
          <Title>Hey, Hello. AyeAyeAye</Title>
          <SubTitle>
            <span
              style={{
                filter: ' drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2))',
              }}
            >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio maiores earum, incidunt architecto hic accusantium a temporibus!
            </span>
          </SubTitle>
        </TitleContainer>
      </Section>

   

  )
}

export default FirstSection
