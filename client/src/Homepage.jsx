import React, { useEffect, useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import ImageContext from "./context/imageContext/ImageContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import SkillSection from "./pages/SkillSection";
import Work from "./pages/Work";

const Homepage = () => {
  const imageContext = useContext(ImageContext);

  const { images, loadImage } = imageContext;

  useEffect(() => {
    loadImage("all");
    console.log("renders hiome page");
  }, []);

  return (
    <Container>
      <HomePage />
      <About />
      <Skills skills={images} />
      <Work projects={images} />
      <SkillSection languages={images} />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  background: rgb(25, 25, 25);
  /* background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  ); */
  width: 100%;
  overflow: hidden;
`;
