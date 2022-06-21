import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>Copyright © 2022 developedbyj.com</Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgb(80, 72, 249, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
