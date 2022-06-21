import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Computer from "../assets/computer.png";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import AuthContext from "../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../pages/LoadingScreen";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated, loadUSer, loading, logOut } = authContext;

  useEffect(() => {
    loadUSer();
  }, []);

  const handleLogOut = (e) => {
    logOut();
    window.location.reload();
  };

  if (!loading) {
    return (
      <Wrapper>
        <Container>
          <Logo>
            <Text>
              Janaka.<span>DEV</span>
            </Text>
          </Logo>
          <NavLinks>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Work</Link>
            <Link>Skills</Link>
            <Link>Contact</Link>
            {isAuthenticated ? (
              <Link onClick={handleLogOut}>Log Out</Link>
            ) : (
              <></>
            )}
          </NavLinks>
          <HamBurgerMenu>
            <MenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <Burger
                //   whileInView={{ x: [100, 0] }}
                //   animate={{ x: 100 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <HiXBar onClick={() => setToggle(false)} />{" "}
                <BurgerNav>
                  <Link>Home</Link>
                  <Link>About</Link>
                  <Link>Work</Link>
                  <Link>Skills</Link>
                  <Link>Contact</Link>
                  {isAuthenticated ? (
                    <Link onClick={handleLogOut}>Log Out</Link>
                  ) : (
                    <></>
                  )}
                </BurgerNav>
              </Burger>
            )}
          </HamBurgerMenu>
        </Container>
      </Wrapper>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: rgb(25, 25, 25);
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  );
  position: relative;
  @media screen and (max-width: 700px) {
    height: calc(100% - 100vw);
  }
  top: 0;
  z-index: 11;
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Text = styled.h2`
  font-weight: 600;
  span {
    color: #58d5d3;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Link = styled.a`
  margin-left: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #58d5d3;
  }
`;

const HamBurgerMenu = styled.div`
  display: none;
  color: #8b8989;
  background-color: #1d1d1d;
  @media screen and (max-width: 900px) {
    display: unset;
  }
`;
const Burger = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  background-color: rgb(80, 72, 249, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* flex-direction: column-reverse; */
`;
const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  align-self: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 900px) {
  }
`;

const HiXBar = styled(HiX)`
  font-size: 25px;
  height: 80px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  margin-top: -10px;
`;

const MenuAlt4 = styled(HiMenuAlt4)`
  font-size: 25px;
`;
