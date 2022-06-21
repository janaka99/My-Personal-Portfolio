import React, { useRef } from "react";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import styled from "styled-components";
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
      <SubContainer>
        <Wrapper onSubmit={handleContact}>
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
        <Description>
          <Title>Let's get Started</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            incidunt consequuntur debitis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident, inventore!
          </Desc>
          <EmailDetails>
            <Button>
              <Icon>
                <FiMail fill={"black"} size={"1.5rem"} />
              </Icon>
              <Text>janakachamith88@gmail.com</Text>
            </Button>
            <Button>
              <Icon>
                <AiFillPhone fill={"white"} size={"1.5rem"} />
              </Icon>
              <Text>+00 000 000 000</Text>
            </Button>
          </EmailDetails>
        </Description>
      </SubContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background: rgb(25, 25, 25);
  /* background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  ); */
  width: 100%;
  display: flex;
  padding: 50px 0;
`;
const SubContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`;

const Wrapper = styled.form`
  width: 50%;
`;
const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.div`
  font-size: 50px;
  width: 100%;
  font-weight: 600;
  padding: 0 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;
const Desc = styled.div`
  width: 100%;
`;
const EmailDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 95%;
  max-width: 700px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.div`
  display: flex;
  padding: 10px 15px;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  background-color: #1c1c1c;
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
  color: white;

  margin-right: 25px;
`;
const Text = styled.div`
  font-weight: 500;
  color: #8b8989;

  font-size: 14px;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 700px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  margin-right: 20px;
`;
const InputTab = styled.input`
  margin-bottom: 20px;
  color: black;
  padding: 10px 8px;
  border-radius: 4px;
  outline: none;
  border: 2px solid black;

  font-size: 15px;
`;
const MessageTab = styled.textarea`
  margin-bottom: 20px;
  border-radius: 4px;
  color: black;

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
    color: black;
    font-weight: 600;
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
