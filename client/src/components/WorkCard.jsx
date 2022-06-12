import React from "react";
import styled from "styled-components";

const WorkCard = ({ imgLink, title, desc }) => {
  return (
    <Wrapper>
      <Container>
        <ImageSec>
          <Image imgLink={imgLink}></Image>
        </ImageSec>
        <TextSec>
          <div>{title}</div>
          <span>{desc}</span>
        </TextSec>
      </Container>
    </Wrapper>
  );
};

export default WorkCard;

const Wrapper = styled.div`
  width: 240px;
  height: fit-content;
  background-color: gray;
  border-radius: 8px;
  overflow: hidden;
`;
const Container = styled.div`
  width: 240px;
`;
const ImageSec = styled.div``;
const Image = styled.div`
  width: 200px;
  margin: 20px;
  height: 200px;
  background-image: url(${(props) => props.imgLink});
`;
const TextSec = styled.div`
  margin: 0 20px 20px 20px;
  text-align: center;

  div {
    font-weight: 600;
    margin-bottom: 12px;
    font-size: 16px;
  }
  span {
    font-weight: 300;
    font-size: 15px;
  }
`;
