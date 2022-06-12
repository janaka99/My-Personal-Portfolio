import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SkillCard from "../components/SkillCard";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ImageContext from "../context/imageContext/ImageContext";

const Skills = () => {
  const navigate = useNavigate();

  const imageContext = useContext(ImageContext);

  const { images, loadImage } = imageContext;

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <Wrapper>
      <Title text1="What " text2="I'm Do" />
      <AddNewSkill onClick={() => navigate("/add-new-skill")}>
        Add New Skill
      </AddNewSkill>
      {images ? (
        <Container>
          {images.map((item) => {
            return (
              <SkillCard
                key={item.imageId}
                title={item.title}
                imgLink={item.path}
              />
            );
          })}
        </Container>
      ) : (
        <Container>
          <SkillCard
            title="Frontend Development"
            imgLink="https://images.unsplash.com/photo-1647829815927-72e52562148a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />

          <SkillCard
            title="MERN Stack"
            imgLink="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Container>
      )}
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
