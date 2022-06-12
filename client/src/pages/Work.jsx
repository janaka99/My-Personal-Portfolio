import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import WorkCard from "../components/WorkCard";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title text1="Projects " text2="I Have Done" />
      <h1 onClick={() => navigate("/add-new-work")}>Add New Work</h1>
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
          <WorkCard
            imgLink="https://images.unsplash.com/photo-1647804212597-15bc7c55c257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            title="Modern UX/UI Website"
            desc="A Moders UX/UI portfolio website"
          />
          <WorkCard
            imgLink="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            title="Resturant Web App Project"
            desc="A Modern Resturant Web App Project"
          />
          <WorkCard
            imgLink="https://images.unsplash.com/photo-1647862892084-16efb44a1c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            title="Cool Mobile App design"
            desc="Mobile App for ICT students"
          />
          <WorkCard
            imgLink="https://images.unsplash.com/photo-1647835895984-e1b5ddb1cbf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            title="Coca Cola Company Web App"
            desc="Beautifull Drinking Website"
          />
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
