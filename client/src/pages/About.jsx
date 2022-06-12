import React from "react";
import styled from "styled-components";
import Me from "../assets/me.jpg";
import ResumeBlack from "../assets/resumeBlack.png";
import Title from "../components/Title";

const About = () => {
  return (
    <Container>
      <Title text1="About " text2="Me" />
      <Wrapper>
        <Text>
          <Desc>
            I am a self-taught, as well as bootcamp graduate, full-stack
            developer, eager to keep on learning. I am passionate about creating
            innovative solutions aiming for smooth user experiences while
            keeping a high functionality and paying attention to details. I love
            organization and structure and therefore put a high emphasis on
            clean, elegant and efficient code with a mobile-first approach to
            ensure responsive design
          </Desc>
        </Text>
        <ImageSec>
          <ImgContainer>
            <Image></Image>
          </ImgContainer>
          <Address>
            <div>Nuwaraeliya, Walapane</div>
          </Address>
          <ResumeButton>
            <span>Resume</span>
            <img src={ResumeBlack} />
          </ResumeButton>
          <ContactButton>
            {" "}
            <span>Contact Me</span>
            <img src={ResumeBlack} />
          </ContactButton>
        </ImageSec>
      </Wrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: rgb(80, 72, 249, 0.1);
  padding: 50px 0;
`;
const Wrapper = styled.div`
  width: 85%;
  max-width: 1440px;

  margin: 0 auto;
  display: flex;

  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Text = styled.div`
  width: 70%;
  margin-right: 20px;
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
const Desc = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  word-spacing: 5px;
  text-align: justify;
`;
const ImageSec = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-width: 820px) {
    margin-top: 50px;
    width: 100%;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 15%;
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Me});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
const Address = styled.div`
  margin: 20px auto;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    text-align: center;
    width: 200px;
  }
  @media screen and (max-width: 820px) {
    justify-content: center;
  }
`;
const ResumeButton = styled.div`
  height: 50px;
  width: 200px;
  border-radius: 4px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.3s all ease-in-out;

  img {
    height: 70%;
    margin-right: 15px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    margin-left: 15px;
    transition: 0.3s all ease-in-out;
  }

  &:hover {
    transition: 0.3s all ease-in-out;
    background-color: black;
    span {
      color: white;
      transition: 0.3s all ease-in-out;
    }
  }
`;
const ContactButton = styled.div`
  height: 50px;
  width: 200px;
  transition: 0.3s all ease-in-out;

  border-radius: 4px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;

  align-items: center;

  img {
    height: 70%;
    margin-right: 15px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    margin-left: 15px;
    transition: 0.3s all ease-in-out;
  }

  &:hover {
    background-color: black;
    transition: 0.3s all ease-in-out;
    span {
      color: white;
      transition: 0.3s all ease-in-out;
    }
  }
`;
