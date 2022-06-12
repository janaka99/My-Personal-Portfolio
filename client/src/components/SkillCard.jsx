import React from "react";
import styled from "styled-components";

const SkillCard = ({ imgLink, title }) => {
  return (
    <Wrapper>
      <Container>
        <Image imgLink={imgLink}></Image>
        <Title>{title}</Title>
      </Container>
    </Wrapper>
  );
};

export default SkillCard;

const Wrapper = styled.div`
  width: 190px;
  height: 240px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.div`
  height: 190px;
  background-image: url(${(props) => props.imgLink});
  width: 190px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15%;
`;
const Title = styled.div`
  height: 50px;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
