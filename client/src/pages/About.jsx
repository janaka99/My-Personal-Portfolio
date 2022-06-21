import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Me from "../assets/me.jpg";
import ResumeBlack from "../assets/resumeBlack.png";
import { HomePageHeaderAnimation } from "../components/aimations/Animation";
import Title from "../components/Title";
import { useScroll } from "./admiPages/middlewares/Scroll";

const About = () => {
  const [element, controls] = useScroll();

  return (
    <Container ref={element}>
      <Wrapper>
        <TextWrapper>
          <AboutTitle>Who am i</AboutTitle>
          <TextContainer>
            I am a self-taught, as well as bootcamp graduate, full-stack
            developer, eager to keep on learning. I am passionate about creating
            innovative solutions aiming for smooth user experiences while
            keeping a high functionality and paying attention to every small
            details. I love organization and structure and therefore put a high
            emphasis on clean, elegant and efficient code with a beauriful ui
            with responsive design.
          </TextContainer>
          <Resume>
            <button>Resume</button>
          </Resume>
        </TextWrapper>
        <Image></Image>
      </Wrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgb(25, 25, 25);
  /* height: 800px; */
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  height: 500px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    /* padding-bottom: 50px; */
    height: fit-content;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const TextWrapper = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: #f7f5c9; */
  background-color: #c4b18a;
  @media screen and (max-width: 640px) {
    width: 100%;
    padding-bottom: 50px;
  }
`;
const Image = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const AboutTitle = styled(motion.div)`
  font-size: 50px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: black;
`;
const TextContainer = styled.div`
  width: 80%;
  color: black;
  margin: 0 auto;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    font-size: calc(1% + 2vw);
  }
  @media screen and (max-width: 820px) {
    /* align-items: center; */
  }
`;

const Resume = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 10px 15px;
    color: #0197b9;
    background-color: #293952;
    cursor: pointer;
  }
`;
