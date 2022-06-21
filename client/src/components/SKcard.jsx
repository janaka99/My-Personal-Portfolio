import React from "react";
import styled from "styled-components";

const SKcard = ({ imgLink, name }) => {
  return (
    <Wrapper>
      <Container>
        <Image imgLink={imgLink}></Image>
      </Container>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default SKcard;

const Wrapper = styled.div`
  width: 100px;
  /* height: 100px; */
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: #1c1c1c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  background-image: url(${(props) => props.imgLink});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 70%;
  width: 70%;
  z-index: 111;
`;
const Name = styled.div`
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
`;
