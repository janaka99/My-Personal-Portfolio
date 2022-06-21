import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SkillCard from "../components/SkillCard";
import { useNavigate } from "react-router-dom";
import ImageContext from "../context/imageContext/ImageContext";
import AuthContext from "../context/AuthContext/AuthContext";

const Skills = () => {
  const navigate = useNavigate();

  const imageContext = useContext(ImageContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { images } = imageContext;

  return (
    <MainContainer>
      {isAuthenticated && (
        <AddNewSkill onClick={() => navigate("/add-new-skill")}>
          Add New Skill
        </AddNewSkill>
      )}
      <Wrapper>
        <TextContainer>
          <SkillTitle>Skillset</SkillTitle>
          <Description>
            With skills in over 4 different fields of design. I am the perfect
            person to hire when it come to web development and mobile
            application development. Whatever your needs are, I am pretty much
            take on any challange.
          </Description>
        </TextContainer>

        <Container>
          {images ? (
            images
              .filter((lng) => lng.category === "skills")
              .map((item) => {
                return (
                  <CardContainer key={item._id}>
                    <Card>
                      <Img src={item.path}></Img>
                      <Title>{item.title}</Title>
                      <Desc>{item.description}</Desc>
                    </Card>
                  </CardContainer>
                );
              })
          ) : (
            <h1>Hello world</h1>
          )}
        </Container>
      </Wrapper>
    </MainContainer>
  );
};

export default Skills;

const MainContainer = styled.div`
  background: rgb(25, 25, 25);
  padding: 50px 0;
`;

const TextContainer = styled.div`
  width: 30%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  left: 0;
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;
const SkillTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 20px;
  width: 90%;
  margin: 20px 0;
  color: #8b8989;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  max-width: 1440px;
  justify-content: space-around;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  width: 70%;
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 740px) {
    justify-content: center;
    gap: 4px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 644px) {
    grid-template-columns: 1fr;
  }
`;

const AddNewSkill = styled.div`
  cursor: pointer;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  aspect-ratio: 6/4;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 80%;
  height: 80%;
  background: rgb(29, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(29, 29, 29, 0.9192051820728291) 22%,
    rgba(0, 0, 0, 0) 100%
  );
  cursor: pointer;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translate(1%, -1%);
    transition: all 0.2s ease-in-out;
  }
`;
const Img = styled.img`
  height: 20%;
  width: 20%;
  margin-bottom: 20px;
  @media screen and (max-width: 810px) {
    margin-bottom: 10px;
  }
`;
const Title = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 810px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 0;
  }
`;
const Desc = styled.div`
  margin: 20px 0;
  color: #8b8989;
  @media screen and (max-width: 810px) {
    margin: 10px 0;
  }
`;
