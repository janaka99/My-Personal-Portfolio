import React from "react";
import styled from "styled-components";

const WorkCard = ({ imgLink, title, desc, urlLink }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url);
  };
  const handleClick = (url) => {
    openInNewTab(url);
  };

  return (
    <Wrapper onClick={() => handleClick(urlLink)}>
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
  width: 280px;
  height: fit-content;
  background-color: #e1eaee;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: ease-in 0.2s;
  }
`;
const Container = styled.div`
  width: 280px;
`;
const ImageSec = styled.div`
  width: 100%;

  height: 150px;
  overflow: hidden;
`;
const Image = styled.div`
  width: 95%;
  margin: 5px auto;
  height: 150px;
  background-image: url(${(props) => props.imgLink});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.5s;
  }
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
    font-family: sans-serif;
  }
`;
