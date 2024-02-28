import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/9.png'
import Image2 from '../assets/bk assets/36.png'
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

  right: 5%;
  bottom: -100%;
  width: 20%;
  height: 60vh;
  
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const I2 = styled.img`
  position: absolute;

  left: 5%;
  bottom: -100%;
  width: 20%;
  height: 60vh;
  
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const TitleContainer = styled.div`
  width: 50%;
  
  height: 100%;
  display: flex;
  flex-direction: column;
 
  align-items: center;

  position: absolute;
  top: 70%;
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
const TextContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1.4rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* text-align: justify; */

  @media screen and (max-width: 1120px) {
    top: 30%;
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
  font-size: calc(
    3.3em + 1vw
  ); /* Adjust the font size based on viewport width */
  z-index: 99;
  text-transform: capitalize;
  text-shadow: 1px 1px 0px #383838, 1px 1px 0px #383838, 1px 1px 0px #383838,
    1px 1px 0px #383838, 2px 2px 0px #383838, 3px 3px 0px #383838, 3px 3px 0px #383838,
    4px 4px 0px #383838, 4px 4px 0px #383838, 5px 5px 0px #383838;
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
  font-weight: 500;
  font-size: calc(1.2em + 1vw);
  line-height: 1.8;
  z-index: 99;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
  
  font-family: "Caveat", cursive !important;
  color: #fff;

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
  text-shadow: 1px 1px 0px #fff, 1px 1px 0px #fff, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    3px 3px 0px #333, 3px 3px 0px #333, 4px 4px 0px #333 !important;
  font-family: Hauora, monospace;
  color: #fff;
  font-size: 4.3rem;
  background-color: #383838;

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }
`

const ThirdSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)
  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current
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
        bottom: '10%',
  
        zIndex: 5,
        scale: 1.3,
        transitionDuration:0.1
      })
      .to(ImageElem2, {
        scale: 1,
        bottom: '10%',
 
        zIndex: 5,
        scale: 1.3,
        transitionDuration:0.1
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
    <div>
      <Section ref={sectionRef}>
        {/* <Blur1 />
        <Blur2 />
        <Blur3 /> */}
        <TitleContainer ref={titleRef}>
          <Title>I am Ginger</Title>
        </TitleContainer>
        <TextContainer ref={textRef}>
          <Text>
            {' '}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus dignissimos, beatae, ad ea delectus commodi similique voluptatem, itaque magni nemo voluptas doloremque perferendis non consequatur eligendi. Voluptatum impedit quas pariatur mollitia vitae.
          </Text>
        </TextContainer>
        <I1 ref={ImageRef1} src={Image1} />
        <I2 ref={ImageRef2} src={Image2}/>
      </Section>
      <div style={{ backgroundColor: '#181818' }}>
        <Marquee speed={250}>
          <MarqueeH1
            whileHover={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            }}
          >
            
          </MarqueeH1>
        </Marquee>
      </div>
    </div>
  )
}

export default ThirdSection;