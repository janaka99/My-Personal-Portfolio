import React, { useContext, useRef } from "react";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext/AuthContext";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const email = useRef();

  const authContext = useContext(AuthContext);

  const { register } = authContext;

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
    };
    register(data);
  };

  return (
    <Container>
      <Wrapper onSubmit={handleForm}>
        <Item>
          <Label>username</Label>
          <Input type="text" ref={username} />
        </Item>
        <Item>
          <Label>password</Label>
          <Input type="text" ref={password} />
        </Item>
        <Item>
          <Label>email Address</Label>
          <Input type="text" ref={email} />
        </Item>
        <Button type="email">Register</Button>
      </Wrapper>
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
