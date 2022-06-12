import React from "react";
import Spinner from "../assets/media/spinner.svg";
import styled from "styled-components";

const LoadingScreen = () => {
  return (
    <Container>
      <img src={Spinner} alt="" />
    </Container>
  );
};

export default LoadingScreen;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
