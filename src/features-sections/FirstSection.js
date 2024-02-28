import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/6.jpg'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image2 from '../assets/bk assets/9-1.png'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const I1 = styled.img`
  position: absolute;
  user-select: none;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)) grayscale(100%);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;

  z-index: 2;
`
const I2 = styled.img`
  height: 40vh;
  width: 80%;
  position: absolute;
  bottom: -80%;
  user-select: none;
  left: 2%;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)) grayscale(100%);
  z-index: 3;
`

const Title = styled.h1`
  font-size: 4.6em;
  z-index: 5;
  text-transform: capitalize;
  background-color: transparent;
  padding: 0.3rem;
  opacity: 0.8;
  border-radius: 1rem;
  text-transform: 0 0 4px #fff;
  color: white;
  font-family: "Righteous", sans-serif !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2em;
  }
`
const Cta = styled.h1`
  font-size: 3.3em;
  z-index: 6;
  text-transform: capitalize;
  opacity: 1;

  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: "Righteous", sans-serif !important;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 70em) {
    font-size: 2.7em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2.2em;
  }
`

const SixthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const Text1Ref = useRef(null)
  const frameRef = useRef(null)
  const ctaRef = useRef(null)

  // Reference for the second text

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const Text1Elem = Text1Ref.current
    const imageElem = imageRef.current
    const frameElem = frameRef.current
    const ctaElem = ctaRef.current

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: '5% top',
          end: `bottom top`,
          scrub: 1,
        },
      })
      .to(Text1Elem, { top: '-45%', scale: 1,transitionDuration:0.3 })
      .to(imageElem, { scale: 0.3, rotation: 15, bottom: '5%',transitionDuration:0.1 }, 'key1')
      .to(frameElem, { bottom: '4%', scale: 1, rotation: -20,transitionDuration:0.6 }, 'key1')
      .to(ctaElem, { top: '50%', right: '20%', scale: 1, rotation: 15,transitionDuration:0.2 })

    return () => {
      if (t1) t1.kill()
    }
  }, [])

  return (
    <Section ref={sectionRef}>
      <I1 ref={imageRef} src={Image1} />
      <Title
        ref={Text1Ref}
        style={{ top: '40%', position: 'absolute', textAlign: 'center' }}
      >
        Lorem ipsum dolor sit amet consectetur., <br /> Lorem ipsum dolor sit amet.<br />{' '}
       Lorem ipsum dolor sit.
      </Title>
      <I2 ref={frameRef} src={Image2} />
      <Cta ref={ctaRef} style={{ top: '-50%', position: 'absolute' }}>
        Lorem ipsum dolor sit amet consectetur.
      </Cta>
    </Section>
  )
}
export default SixthSection
