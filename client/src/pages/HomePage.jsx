import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { HomePageHeaderAnimation } from "../components/aimations/Animation";
import { motion } from "framer-motion";
import { useScroll } from "./admiPages/middlewares/Scroll";

const HomePage = () => {
  const [element, controls] = useScroll();

  return (
    <Container>
      <SideContainer></SideContainer>
      <MaxWidthContainer>
        <Wrapper>
          <MyImage
          // variants={HomePageHeaderAnimation}
          // initial={{ x: -100, opacity: 0, transition: { duration: 1 } }}
          // animate={{ x: 100, opacity: 1 }}
          // transition={{ duration: 1, delay: 0.2 }}
          >
            <div></div>
          </MyImage>
          <TextContainer>
            <Name
            // initial={{ x: 200, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 1 }}
            // style={{ color: "#58d5d3" }}
            >
              <motion.span>Hi,</motion.span>{" "}
              <motion.span>I'm Janaka Chamith.</motion.span>
              <motion.span>A Programmer & Designer</motion.span>
              <span style={{ color: "rgb(19, 18, 18)" }}>
                Based in Sri Lanka
              </span>
            </Name>
            {/* <Desc>
            <Typewriter
              words={["Programmer", "Designer", "Devop Engineer"]}
              loop
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span style={{ color: "#58d5d3" }}>_|</span>
          </Desc> */}
          </TextContainer>
        </Wrapper>
      </MaxWidthContainer>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: red;
  background: rgb(25, 25, 25);
  /* background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  ); */
`;

const MaxWidthContainer = styled.div`
  max-width: 1440px;
  width: 95%;
  margin: 0 auto;
  height: 100%;
`;

const SideContainer = styled.div`
  position: absolute;
  width: 70%;
  right: 0;
  height: 100%;
  background-color: rgb(80, 72, 249, 0.1);
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const MyImage = styled(motion.div)`
  position: absolute;
  width: 33%;
  left: 0;
  border: 10px solid #58d5d3;
  aspect-ratio: 9/9;
  @media screen and (max-width: 640px) {
    transform: translate(-50%, -50%);
    top: 35%;
    left: 50%;
    width: 40%;
  }
  @media screen and (max-width: 640px) {
    transform: translate(-50%, -50%);
    top: 35%;
    left: 50%;
  }
  div {
    width: 100%;
    max-height: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/thewebreader/image/upload/v1655661543/IMG_20201212_223011_678_qvfwhn.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: fit-content;
  align-self: flex-end;
  @media screen and (max-width: 640px) {
    width: 95%;
    margin-bottom: 50px;
  }
`;

const Name = styled(motion.div)`
  font-size: 60px;
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* @media screen and (max-width: 1200px) {
    font-size: calc(100% + 3vw);
  } */
  @media screen and (max-width: 640px) {
    /* font-size: calc(1% + 2vw); */
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 1200px) {
    font-size: calc(100% + 2vw);
  }

  @media screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  span {
    @media screen and (max-width: 640px) {
      font-size: calc(100% + 2vw);
    }
    @media screen and (max-width: 480px) {
      font-size: calc(100% + 3vw);
    }
  }
`;

const Desc = styled.div`
  font-size: 25px;
  font-weight: 600;

  @media screen and (max-width: 360px) {
    font-size: 19px;
  }
`;
