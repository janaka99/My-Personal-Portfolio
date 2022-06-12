import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Name>
            <span style={{ color: "rgb(80,72,249)" }}>Hi,</span>{" "}
            <span>I'm Janaka</span>
          </Name>
          <Desc>
            <Typewriter
              words={["Programmer", "Designer", "Devop Engineer"]}
              loop
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span style={{ color: "rgb(80,72,249)" }}>_|</span>
          </Desc>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: white;
  height: fit-content;
  width: fit-content;
`;

const TextContainer = styled.div``;
// #7562E0

const Name = styled.div`
  font-size: 80px;
  font-weight: 700;
  margin-top: -60px;

  @media screen and (max-width: 700px) {
    font-size: calc(120% + 7vw);
  }
  @media screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Desc = styled.div`
  font-size: 25px;
  font-weight: 600;
  @media screen and (max-width: 360px) {
    font-size: 19px;
  }
`;
