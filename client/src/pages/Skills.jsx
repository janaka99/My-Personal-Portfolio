import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SkillCard from "../components/SkillCard";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import ImageContext from "../context/imageContext/ImageContext";

const Skills = () => {
  const navigate = useNavigate();

  const imageContext = useContext(ImageContext);

  const { images, isAuthenticated } = imageContext;
  return (
    <Wrapper>
      <Title text1="What " text2="I Do" />
      {isAuthenticated ? (
        <AddNewSkill onClick={() => navigate("/add-new-skill")}>
          Add New Skill
        </AddNewSkill>
      ) : (
        <></>
      )}
      <Container>
        {images ? (
          images
            .filter((lng) => lng.category === "skills")
            .map((item) => {
              return (
                <SkillCard
                  key={item._id}
                  title={item.title}
                  imgLink={item.path}
                />
              );
            })
        ) : (
          <h1>Hello world</h1>
        )}
      </Container>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1440px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 740px) {
    justify-content: center;
  }
`;

const AddNewSkill = styled.div`
  cursor: pointer;
`;
