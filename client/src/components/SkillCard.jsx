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
  width: 90%;
  height: 300px;
  padding: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  div {
    height: 90%;
    border-radius: 15%;
    overflow: hidden;
  }
`;
const Image = styled.div`
  height: 100%;
  background-image: url(${(props) => props.imgLink});
  width: 100%;
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
