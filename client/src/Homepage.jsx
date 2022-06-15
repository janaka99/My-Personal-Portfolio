import React, { useEffect, useState } from "react";
import { useContext } from "react";
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
    <>
      <HomePage />
      <About />
      <Skills skills={images} />
      <Work projects={images} />
      <SkillSection languages={images} />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
