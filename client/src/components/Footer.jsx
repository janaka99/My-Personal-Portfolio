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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
