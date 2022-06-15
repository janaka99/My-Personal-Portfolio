import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import SKcard from "../components/SKcard";
import java from "../assets/Languages/java.png";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import ImageContext from "../context/imageContext/ImageContext";

const SkillSection = ({ languages }) => {
  const navigate = useNavigate();

  const imageContext = useContext(ImageContext);

  const { images, isAuthenticated } = imageContext;

  return (
    <Wrapper>
      <Title text1="Skills " text2="& Experience" />
      {isAuthenticated ? (
        <h1 onClick={() => navigate("/add-new-language-or-tool")}>
          Add New skill
        </h1>
      ) : (
        <></>
      )}
      <Container>
        <SubSection>
          <Name>Languagess</Name>
          <Cards>
            {images ? (
              images
                .filter((lng) => lng.skillCategory === "language")
                .map((item) => {
                  return (
                    <SKcard
                      key={item._id}
                      imgLink={item.path}
                      name={item.title}
                    />
                  );
                })
            ) : (
              <h1>Hello world</h1>
            )}
          </Cards>
        </SubSection>
        <SubSection>
          <Name>Database Management Systems</Name>
          <Cards>
            {images ? (
              images
                .filter((lng) => lng.skillCategory === "dbms")
                .map((item) => {
                  return (
                    <SKcard
                      key={item._id}
                      imgLink={item.path}
                      name={item.title}
                    />
                  );
                })
            ) : (
              <h1>Hello world</h1>
            )}
          </Cards>
        </SubSection>
        <SubSection>
          <Name>FrameWorks & Libraries & Technologies</Name>
          <Cards>
            {images ? (
              images
                .filter((lng) => lng.skillCategory === "framework")
                .map((item) => {
                  return (
                    <SKcard
                      key={item._id}
                      imgLink={item.path}
                      name={item.title}
                    />
                  );
                })
            ) : (
              <h1>Hello world</h1>
            )}
          </Cards>
        </SubSection>
        <SubSection>
          <Name>Other tools</Name>
          <Cards>
            {images ? (
              images
                .filter((lng) => lng.skillCategory === "tool")
                .map((item) => {
                  return (
                    <SKcard
                      key={item._id}
                      imgLink={item.path}
                      name={item.title}
                    />
                  );
                })
            ) : (
              <h1>Hello world</h1>
            )}
          </Cards>
        </SubSection>
      </Container>
    </Wrapper>
  );
};

export default SkillSection;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
`;
const Container = styled.div`
  width: 85%;
  padding-bottom: 50px;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const SubSection = styled.div`
  width: 100%;
`;
const Name = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin: 30px 0;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
  gap: 40px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;
