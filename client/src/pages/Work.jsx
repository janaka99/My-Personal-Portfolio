import React, { useContext } from "react";
import styled from "styled-components";
import WorkCard from "../components/WorkCard";
import { useNavigate } from "react-router-dom";
import ImageContext from "../context/imageContext/ImageContext";
import AuthContext from "../context/AuthContext/AuthContext";
import { motion } from "framer-motion";

const Work = () => {
  const navigate = useNavigate();
  const imageContext = useContext(ImageContext);
  const { isAuthenticated } = useContext(AuthContext);

  const { images } = imageContext;

  return (
    <Wrapper>
      {isAuthenticated ? (
        <h1 onClick={() => navigate("/add-new-work")}>Add New Work</h1>
      ) : (
        <></>
      )}
      <Container>
        <LeftSide>
          {images ? (
            images
              .filter((lng) => lng.category === "projects")
              .map((item) => {
                return (
                  <MyWork key={item._id}>
                    <ImageContainer>
                      <WorkContainer>
                        <Image src={item.path} />
                      </WorkContainer>
                    </ImageContainer>

                    <Description>
                      <h2>
                        <a
                          href={item.site_url}
                          target="_black"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      </h2>
                      <div>{item.description}</div>
                    </Description>
                  </MyWork>
                );
              })
          ) : (
            <h1>Hello world</h1>
          )}
        </LeftSide>
        <ContainerOne>
          <Title>Projects</Title>
          <MainTitle>Some Projects that I've Done</MainTitle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed
            dolor reprehenderit amet excepturi, pariatur quia omnis id nobis
            maiores!
          </Desc>
        </ContainerOne>
      </Container>
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.div`
  width: 100%;
  background: rgb(25, 25, 25);
  /* background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  ); */
  padding: 50px 0;
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const LeftSide = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 644px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerOne = styled.div`
  width: 30%;
  margin-top: 28px;
  margin-bottom: 20px;
  /* background-color: #1c1c1c; */
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const MainTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

const Desc = styled.div`
  color: #8b8989;
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  width: 90%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const WorkContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Description = styled.div`
  position: absolute;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52%;
  bottom: 0;
  z-index: 11;
  transform: translateY(50%);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(0%);
    transition: all 0.5s ease-in-out;
  }
  h2 {
    height: 50%;
    font-size: 1.5em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -2;
    @media screen and (max-width: 768px) {
      font-size: 1em;
      /* margin-bottom: 0; */
    }
    @media screen and (max-width: 644px) {
    }
    a {
      cursor: pointer;
    }
  }
  div {
    height: 50%;
    color: #8b8989;
    width: 90%;
    text-align: center;
    z-index: -2;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

const MyWork = styled.div`
  width: 80%;
  position: relative;
  aspect-ratio: 6/4;
  overflow: hidden;
  /* height: 500px; */
  margin: 30px;
  display: flex;
  flex-direction: column;
`;
