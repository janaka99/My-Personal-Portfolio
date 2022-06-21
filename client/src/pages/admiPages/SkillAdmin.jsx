import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ImageContext from "../../context/imageContext/ImageContext";
import SkillCard from "../../components/SkillCard";
import ErrorMsg from "../../components/ErrorMsg";
import { checkError, noUpdateErrorCheck } from "./middlewares/Error";
import StatusMsg from "../../components/StatusMsg";

const SkillAdmin = () => {
  const title = useRef();
  const description = useRef();

  const [file, setFile] = useState(null);
  const [edit, setedit] = useState(false);
  const [headerError, setheaderError] = useState("");
  const [card, setcard] = useState(null);
  const [original, setOriginal] = useState(false);
  const [errorState, setErrorState] = useState({
    title: "",
    description: "",
    file: "",
    url: "",
  });

  const genError = (errMsg) => {
    if (errMsg === "noErrors") {
      return true;
    } else {
      setErrorState(errMsg);
      setTimeout(() => {
        setErrorState({
          title: "",
          description: "",
          file: "",
          url: "",
        });
      }, 5000);
    }
  };

  const genHeaderError = (errMsg) => {
    setheaderError(errMsg);
    setTimeout(() => {
      setheaderError("");
    }, 5000);
  };
  const imageContext = useContext(ImageContext);

  const {
    addImage,
    deleteImage,
    message,
    error,
    updateImage,
    loadImage,
    images,
  } = imageContext;

  useEffect(() => {
    loadImage("skills");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: title.current.value,
      type: "skills",
      description: description.current.value,
      site_url: "none",
      skillCategory: "none",
    };

    const errorState = genError(
      checkError(file, formData.title, formData.description)
    );
    if (errorState === true) {
      try {
        const newData = JSON.stringify(formData);
        const data = new FormData();
        data.append("file", file);
        data.append("projectData", newData);
        console.log(data);
        addImage(data);
      } catch (error) {
        genHeaderError("Something Wrong");
      }
    } else {
      genHeaderError("Fill all the fields");
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (original === true) {
      const newData = {
        imageData: {
          title: title.current.value,
          type: "skills",
          description: description.current.value,
          site_url: "none",

          id: card._id,
          category: card.category,
        },
      };
      const errorState = genError(
        noUpdateErrorCheck(
          newData.imageData.title,
          newData.imageData.description
        )
      );
      if (errorState === true) {
        try {
          updateImage(newData);
        } catch (error) {
          genHeaderError("Something Wrong");
        }
      } else {
        genHeaderError("Fill all the fields");
      }
    } else {
      const formData = {
        title: title.current.value,
        type: "skills",
        description: description.current.value,
        site_url: "none",

        id: card._id,
        category: card.category,
        url: card.url,
        path: card.path,
      };
      const errorState = genError(
        checkError(file, formData.title, formData.description)
      );
      if (errorState === true) {
        const newData = JSON.stringify(formData);

        const data = new FormData();
        data.append("file", file);
        data.append("projectupdateData", newData);
        try {
          updateImage(data);
        } catch (error) {
          genHeaderError("Something Wrong");
        }
      } else {
        genHeaderError("Fill all the fields");
      }
    }
  };

  async function deleteItem(item) {
    const data = {
      id: item,
    };
    deleteImage(data);
  }

  const handleEdit = async (item) => {
    setcard(() => {
      return item;
    });
    console.log(card);
    setedit(true);
  };
  console.log(original);
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          {edit ? <h2>Edit </h2> : <h2>Add New Skill</h2>}
          {edit && <h2 onClick={() => setedit(false)}>Add New Skill</h2>}

          <LContainer>
            <HeaderMsg>
              {!headerError && <StatusMsg fail={headerError} />}
              {message && <StatusMsg success={message} />}
            </HeaderMsg>
            <form onSubmit={edit ? updateHandler : submitHandler}>
              <Name>
                <label htmlFor="">Enter title</label>
                <input
                  type="text"
                  ref={title}
                  defaultValue={edit ? card.title : ""}
                />
                {errorState.title && <ErrorMsg eMsg={errorState.title} />}
              </Name>
              <Name>
                <label htmlFor="">Enter description</label>
                <textarea type="text" ref={description} />
                {errorState.description && (
                  <ErrorMsg eMsg={errorState.description} />
                )}
              </Name>
              <Url>
                <label htmlFor="">Insert Image</label>
                <input
                  type="file"
                  accept=" .png, .jpeg, .jpg"
                  onChange={(e) => {
                    setOriginal(false);
                    setFile(e.target.files[0]);
                  }}
                />
                {errorState.file && <ErrorMsg eMsg={errorState.file} />}

                {}
                {edit && (
                  <EditButton
                    onClick={() => {
                      setOriginal(true);
                    }}
                  >
                    hellow
                  </EditButton>
                )}
                <SkillCard
                  title={edit ? card.title : "Title Goes Here"}
                  imgLink={() => {
                    if (!file && edit && !original) {
                      return card.path;
                    } else if (!edit && file && !original) {
                      return URL.createObjectURL(file);
                    } else if (edit && file && !original) {
                      return URL.createObjectURL(file);
                    } else if (original && edit && file) {
                      return card.path;
                    } else if (original && edit && !file) {
                      return card.path;
                    } else if (original && !edit && file) {
                      return URL.createObjectURL(file);
                    } else {
                      const link = require("../../assets/media/sample.jpg");
                      return link;
                    }
                  }}
                />
              </Url>
              <SubmitButtonContainer>
                <SubmitButton type="submit">
                  {edit ? "Update" : "Add New Skill"}
                </SubmitButton>
              </SubmitButtonContainer>
            </form>
          </LContainer>
        </LeftBox>
        <RightBox>
          <h2>Edit Your Skills</h2>
          <Table>
            {images ? (
              images.map((item) => {
                return (
                  <div key={item._id}>
                    <SkillCard title={item.title} imgLink={item.path} />

                    <Row>
                      <EditButton
                        onClick={(e) => {
                          e.preventDefault();
                          setFile(null);
                          setOriginal(true);
                          handleEdit(item);
                        }}
                      >
                        Edit
                      </EditButton>
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
                  </div>
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
  border: 1px solid black;
  padding: 5px;
  margin-right: 20px;
  background-color: rgb(48, 48, 48);
`;
const HeaderMsg = styled.div`
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 4px auto;
`;
const LContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;
const Name = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;

  flex-direction: column;
  label {
    margin-bottom: 10px;
  }
  input {
    outline: none;
    display: flex;
    flex: 1;
    color: rgb(48, 48, 48);
    padding: 5px 4px;
  }
  textarea {
    color: rgb(48, 48, 48);
    height: 150px;
    margin: 0;
    padding: 4px;
    outline: none;
    border: none;
  }
`;
const Url = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  label {
    align-self: flex-start;
    margin-bottom: 10px;
  }
  input {
    align-self: flex-start;
    margin-bottom: 50px;
  }
`;
const SubmitButtonContainer = styled.button`
  width: 100%;
  justify-content: center;
  display: flex;
  justify-self: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 50px;
  background-color: rgb(48, 48, 48);
`;

const SubmitButton = styled.button`
  padding: 5px 7px;
  border: 1px solid white;
  width: fit-content;
  justify-content: center;
  display: flex;
  justify-self: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(48, 48, 48);
`;

const Table = styled.div`
  margin: 50px 0;
`;

const Row = styled.div`
  display: flex;

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
  width: 50%;
  border: 1px solid black;
  padding: 5px;
  margin-left: 20px;
  background-color: rgb(48, 48, 48);
`;
