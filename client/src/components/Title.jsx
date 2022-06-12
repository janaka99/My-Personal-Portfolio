import React from "react";
import styled from "styled-components";

const Title = ({ text1, text2 }) => {
  return (
    <Container>
      <Text>
        <span style={{ color: "rgb(80,72,249)" }}>{text1}</span>
        {text2}
      </Text>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin: 50px auto;
`;
const Text = styled.div`
  font-size: 45px;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;
