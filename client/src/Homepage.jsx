import React from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import SkillSection from "./pages/SkillSection";
import Work from "./pages/Work";

const Homepage = () => {
  return (
    <>
      <HomePage />
      <About />
      <Skills />
      <Work />
      <SkillSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
