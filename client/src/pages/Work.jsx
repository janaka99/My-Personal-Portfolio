import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import WorkCard from "../components/WorkCard";
import { useNavigate } from "react-router-dom";
import ImageContext from "../context/imageContext/ImageContext";

const Work = () => {
  const navigate = useNavigate();
  const imageContext = useContext(ImageContext);

  const { images, isAuthenticated } = imageContext;
  return (
    <Wrapper>
      <Title text1="Projects " text2="I Have Done" />
      {isAuthenticated ? (
        <h1 onClick={() => navigate("/add-new-work")}>Add New Work</h1>
      ) : (
        <></>
      )}
      <Container>
        <Topics>
          <Button>UI/UX</Button>
          <Button>Web App</Button>
          <Button>Mobile App</Button>
          <Button>React JS</Button>
          <Button>Next JS</Button>
          <Button>MERN</Button>
          <Button>All</Button>
        </Topics>
        <MyWork>
          {images ? (
            images
              .filter((lng) => lng.category === "projects")
              .map((item) => {
                return (
                  <WorkCard
                    key={item._id}
                    imgLink={item.path}
                    title={item.title}
                    desc={item.description}
                    urlLink={item.site_url}
                  />
                );
              })
          ) : (
            <h1>Hello world</h1>
          )}
        </MyWork>
      </Container>
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(80, 72, 249, 0.1);
  padding: 50px 0;
`;
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 1440px;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Topics = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.div`
  margin: 5px 20px;
  border: 1px solid black;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
`;

const MyWork = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  gap: 20px;
  justify-content: space-around;
`;
