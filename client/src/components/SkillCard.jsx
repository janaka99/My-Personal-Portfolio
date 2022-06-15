import React from "react";
import styled from "styled-components";

const SkillCard = ({ imgLink, title, id }) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Image imgLink={imgLink}></Image>
        </div>
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
  border-radius: 15%;

  overflow: hidden;
  div {
    border-radius: 15%;
    overflow: hidden;
  }
`;
const Image = styled.div`
  height: 190px;
  background-image: url(${(props) => props.imgLink});
  width: 190px;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.5s;
  }
`;
const Title = styled.div`
  height: 50px;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
