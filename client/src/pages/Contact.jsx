import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import styled from "styled-components";
import Title from "../components/Title";
import axios from "axios";

const Contact = () => {
  const emailBody = useRef();

  const handleContact = (e) => {
    e.preventDefault();
    const data = { message: emailBody.current.value };
    axios.post("https://janakachamith.herokuapp.com/api/contact/", data);
  };

  return (
    <Container>
      <Title text1="Contact" text2=" Me" />

      <Wrapper onSubmit={handleContact}>
        <EmailDetails>
          <Button>
            <Icon>
              <AiOutlineMail />
            </Icon>
            <Text>janakachamith88@gmail.com</Text>
          </Button>
          <Button>
            <Icon>
              <AiFillPhone />
            </Icon>
            <Text>+00 000 000 000</Text>
          </Button>
        </EmailDetails>
        <ContactForm>
          <FormContainer>
            <InputTab placeholder="Your Name" />
            <InputTab placeholder="Your Email" />
            <MessageTab
              ref={emailBody}
              placeholder="Your Message"
              column="45"
            />
          </FormContainer>
        </ContactForm>
        <SendMessage>
          <button type="submit">Send Message</button>
        </SendMessage>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background-color: rgb(80, 72, 249, 0.1);
  width: 100%;
  padding: 50px 0;
`;
const Wrapper = styled.form`
  width: 85%;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const EmailDetails = styled.div`
  display: flex;
  margin-top: 60px;
  width: 95%;
  max-width: 700px;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.div`
  display: flex;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 4px;
  width: 240px;
  background-color: white;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const Icon = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 700px;
  margin: 30px auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputTab = styled.input`
  margin-bottom: 20px;
  padding: 10px 8px;
  border-radius: 4px;
  outline: none;
  border: 2px solid black;

  font-size: 15px;
`;
const MessageTab = styled.textarea`
  margin-bottom: 20px;
  border-radius: 4px;
  outline: none;
  height: 200px;
  font-size: 15px;
  padding: 10px 8px;
  border: 2px solid black;
`;
const SendMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    background-color: white;

    border-radius: 4px;
    cursor: pointer;
    border: 1px solid black;
    padding: 10px 17px;
    font-size: 16px;
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
  }
`;
