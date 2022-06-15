import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import ImageContext from "../../context/imageContext/ImageContext";
import { useNavigate } from "react-router-dom";

const SkillAdmin = ({}) => {
  const [file, setFile] = useState(null);
  const title = useRef();
  const description = useRef();
  const category = useRef();
  const navigate = useNavigate();
  const [skills, setskills] = useState();

  const imageContext = useContext(ImageContext);

  const { addImage, deleteImage, images, loadImage } = imageContext;

  useEffect(() => {
    loadImage("languages");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (file == null) {
      console.log("File is empty");
    } else {
      console.log("File size is", file.size);
      const newTitle = JSON.stringify({
        title: title.current.value,
        description: description.current.value,
        skillCategory: category.current.value,
        type: "languages",
        url: "None",
        site_url: "none",
      });
      console.log(newTitle);
      const data = new FormData();
      data.append("file", file);
      data.append("projectData", newTitle);
      console.log(data);
      try {
        addImage(data);
        console.log("Image added");
      } catch (error) {
        console.log(error);
      }
    }
  };

  async function deleteItem(item) {
    const data = {
      id: item,
    };
    deleteImage(data);
  }

  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <h2>Add New Skill</h2>
          <LContainer>
            <form onSubmit={submitHandler}>
              <Name>
                <label htmlFor="">Enter title</label>
                <input type="text" ref={title} />
              </Name>
              <Name>
                <label htmlFor="">Enter Description</label>
                <input type="text" ref={description} />
              </Name>
              <Name>
                <label htmlFor="">Select Category</label>
                <select ref={category}>
                  <option value="dbms">dbms</option>
                  <option value="language">languages</option>
                  <option value="framework">frameworks</option>
                  <option value="tool">tools</option>
                </select>
              </Name>
              <Url>
                <label htmlFor="">Insert Image</label>
                <input
                  type="file"
                  accept=" .png, .jpeg, .jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                  // onChange={(e) => console.log(e.target.files[0])}
                />
              </Url>
              <SubmitButton type="submit">Add New Skill</SubmitButton>
            </form>
          </LContainer>
        </LeftBox>
        <RightBox>
          <h2>Edit Your Skills</h2>
          <Table>
            {images ? (
              images.map((item) => {
                return (
                  <Row key={item._id}>
                    <Title>{item.title}</Title>
                    <EditButton>Edit</EditButton>
                    <DeleteButton
                      onClick={(e) => {
                        e.preventDefault();
                        deleteItem(item);
                      }}
                    >
                      Delete
                    </DeleteButton>
                    <HideButton>Hide</HideButton>
                  </Row>
                );
              })
            ) : (
              <h2>Hellow</h2>
            )}
          </Table>
        </RightBox>
      </Wrapper>
    </Container>
  );
};

export default SkillAdmin;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
`;

const LeftBox = styled.div`
  width: 50%;
`;

const LContainer = styled.div`
  margin-top: 50px;
`;
const Name = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
  }
  input {
    width: 80%;
    padding: 5px 4px;
  }
`;
const Url = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
  }
  input {
    width: 80%;
  }
`;

const SubmitButton = styled.button`
  padding: 5px 7px;
  border: 1px solid black;
  border-radius: 4px;
  width: fit-content;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Table = styled.div`
  margin: 50px 0;
`;

const Row = styled.div`
  display: flex;
  width: 80%;
  padding: 5px 5px 5px 0;
  border-radius: 5px;
  background: rgb(159, 159, 159);
  background: linear-gradient(
    90deg,
    rgba(159, 159, 159, 0.3) 0%,
    rgba(108, 108, 108, 0.3) 50%,
    rgba(105, 105, 105, 0.3) 100%
  );
  -webkit-box-shadow: 5px 5px 15px 5px #8f8f8f;
  box-shadow: 1px 1px 5px 2px #8f8f8f;
  margin-bottom: 20px;
`;
const Title = styled.div`
  width: 70%;
  font-size: 1.2rem;
  padding: 15px 5px;
`;
const EditButton = styled.div`
  width: 10%;
  font-size: 1.2rem;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: green;
  margin-left: 5px;
  cursor: pointer;
  color: white;
`;
const DeleteButton = styled.div`
  width: 10%;
  font-size: 1.2rem;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: red;
  color: white;
  margin-left: 5px;
  cursor: pointer;
`;
const HideButton = styled.div`
  width: 10%;
  font-size: 1.2rem;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: gray;
  color: white;
  margin-left: 5px;
  cursor: pointer;
`;

const RightBox = styled.div`
  width: 50%;
`;
