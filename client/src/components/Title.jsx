import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useScroll } from "../pages/admiPages/middlewares/Scroll";
import { TitleAnimation } from "./aimations/Animation";

const Title = ({ text1, text2, animateControls }) => {
  return (
    <Container>
      <Text>
        <span style={{ color: " #58d5d3" }}>{text1}</span>
        {text2}
      </Text>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin: 50px auto;
`;
const Text = styled(motion.div)`
  font-size: 45px;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;
