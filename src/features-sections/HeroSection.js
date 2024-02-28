import gsap from 'gsap'
import React from 'react'
import styled from 'styled-components'
import i1 from '../assets/bk assets/17.png'
import i2 from '../assets/bk assets/33.png'
import i3 from '../assets/bk assets/19.png'
import i4 from '../assets/bk assets/4-1.png'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const V1 = styled.img`
  position: absolute;
  top: 20%;
  left: 14%; /* initial position */
  width: 10%;
  height: 30vh;
  border-radius: 50%;
  user-select: none;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  transform: rotate(-17deg) scale(1.8);
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)) grayscale(100%);
`;

const V2 = styled.img`
  user-select: none;
  position: absolute;
  right: 2%;
border-radius: 40%;
  top: 21%;
  width: 30%;
  transform: rotate(-17deg) scale(1.4);
  
  height: 26vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)) grayscale(100%);
  z-index: 2;
  @media screen and (max-width: 1092px) {
    right: 8%; /* Adjust font size for even smaller screens */
  }
  @media screen and (max-width: 800px) {
    right: 15%; /* Adjust font size for even smaller screens */
  }
`
const V3 = styled.img`
  position: absolute;
  left: 15%;
  bottom: 5%;
  user-select: none;
  border-radius: 50%;

  width: 15%;
  height: 28vh;
  object-fit: contain;
  object-position: bottom;
  transform: rotate(-17deg) scale(1.5);
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)) grayscale(100%);

  z-index: 2;
  @media screen and (max-width: 1092px) {
    bottom: 15%; /* Adjust font size for even smaller screens */
  }
  @media screen and (max-width: 800px) {
    bottom: 25%; /* Adjust font size for even smaller screens */
  }
`
const V4 = styled.img`
  position: absolute;
  right: 9%;
  user-select: none;

  bottom: 5%;
  width: 15%;
  height: 50vh;

  object-fit: contain;
  transform: rotate(-17deg) scale(1.5);
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)) grayscale(100%);
  z-index: 2;
  @media screen and (max-width: 1092px) {
   bottom: 15%;
   right:20% /* Adjust font size for even smaller screens */
  }
  @media screen and (max-width: 800px) {
    bottom: 25%;
    right:26% /* Adjust font size for even smaller screens */
  }
`

const TextContainer = styled.div`
  text-align: center;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1rem;

  #svgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.3rem;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: transparent;
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #ffdf00;
    }
  }
`
const Title = styled.h1`
  text-align: start;
  text-align: center;
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

  @media screen and (max-width: 625px) {
    font-size: calc(1em + 1vw);
  }
`
const HeroSection = () => {
  const smoothScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 2,
      behavior: 'smooth',
    })
  }

  return (
    <Section>
      <TextContainer>
        <Title>We are broke</Title>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, placeat. Sequi odit sint minima dolores.</Text>
        <div id="svgContainer" onClick={smoothScroll}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="white"
            viewBox="0 0 92 92"
            id="down-arrow"
          >
            <path d="M73.8 57.9l-25 24.9C48 83.6 47 84 46 84s-2-.4-2.8-1.2l-25-24.9c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L42 70.4V12c0-2.2 1.8-4 4-4s4 1.8 4 4v58.4l18.2-18.1c1.6-1.6 4.1-1.6 5.7 0 1.5 1.5 1.5 4-.1 5.6z"></path>
          </svg>
        </div>
      </TextContainer>
      <V1 src={i1} />
      <V2 src={i2} />
      <V3 src={i4} />
      <V4 src={i3} />
    </Section>
  )
}

export default HeroSection
