import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const username = useRef();
  const password = useRef();
  let navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const { logIn, logOut, loadUSer, isAuthenticated } = authContext;

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      username: username.current.value,
      password: password.current.value,
    };
    logIn(data);
  };

  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  useEffect(() => {
    loadUSer();
  }, []);

  return (
    <Container>
      <Wrapper onSubmit={handleForm}>
        <Item>
          <Label>Username or email address</Label>
          <Input type="text" ref={username} />
        </Item>
        <Item>
          <Label>password</Label>
          <Input type="text" ref={password} />
        </Item>
        <Button type="submit">Login</Button>
      </Wrapper>
      {isAuthenticated ? (
        <Button onClick={handleLogout}>LogOut</Button>
      ) : (
        <Button>secret</Button>
      )}
    </Container>
  );
};

export default Login;

const Container = styled.div``;
const Wrapper = styled.form``;
const Item = styled.div``;
const Label = styled.div``;
const Input = styled.input``;
const Button = styled.button`
  cursor: pointer;
`;
