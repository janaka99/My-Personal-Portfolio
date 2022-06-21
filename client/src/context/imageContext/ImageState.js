import React, { useReducer } from "react";
import ImageReducer from "./ImageReducer";
import ImageContext from "./ImageContext";

import {
  Delete_Image,
  Add_Image,
  Load_Image,
  Add_Project,
  Delete_Project,
  Load_Project,
  Upload_Failed,
} from "./ImageActions";
import axios from "axios";

const ImageState = (props) => {
  const initialState = {
    Images: [],
    Projects: [],
    error: null,
    message: null,
  };

  const [state, dispatch] = useReducer(ImageReducer, initialState);

  //add image

  const API = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://janakachamith.herokuapp.com",
    allowedHeaders: ["content-type", "authorization"],
  });
  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  const deleteImage = (data) => {
    try {
      API.post("/api/image/deleteItem", data).then((res) => {
        if (res.data.error) {
          dispatch({
            type: Upload_Failed,
            payload: res.data,
          });
        } else {
          dispatch({
            type: Delete_Image,
            payload: res.data.products,
          });
        }
      });
    } catch (err) {
      dispatch({
        type: Upload_Failed,
        payload: err.message,
      });
    }
  };

  //add image

  const addImage = (data) => {
    API.post("/api/image/add-skill", data)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: Upload_Failed,
            payload: res.data,
          });
        } else {
          dispatch({
            type: Add_Image,
            payload: res.data.products,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: Upload_Failed,
          payload: err.message,
        });
      });
  };

  //add image

  const updateImage = (data) => {
    API.post("/api/image/update", data)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: Upload_Failed,
            payload: res.data,
          });
        } else {
          dispatch({
            type: Add_Image,
            payload: res.data.products,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: Upload_Failed,
          payload: err.message,
        });
      });
  };

  const loadImage = (category) => {
    API.get(`/api/image/loadSkills/${category}`).then((res) => {
      if (res.data.error) {
        dispatch({
          type: Upload_Failed,
          payload: res.data,
        });
      } else {
        dispatch({
          type: Load_Image,
          payload: res.data.products,
        });
      }
    });
  };

  //Add New Project

  const addProject = (data) => {
    try {
      API.post("/api/image/addProject", data).then((res) => {
        if (res.data.error) {
          dispatch({
            type: Upload_Failed,
            payload: res.data,
          });
        } else {
          dispatch({
            type: Add_Project,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch({
        type: Upload_Failed,
        payload: error.message,
      });
    }
  };

  //Delete project

  const deleteProject = (data) => {
    try {
      API.post("/api/image/deleteProject", data)
        .then((res) => {
          if (res.data.error) {
            dispatch({
              type: Upload_Failed,
              payload: res.data.error,
            });
          } else {
            loadImage();
            dispatch({
              type: Delete_Project,
              payload: res.data,
            });
          }
        })
        .catch((error) => {
          dispatch({
            type: Upload_Failed,
            payload: error.message,
          });
        });
    } catch (error) {
      dispatch({
        type: Upload_Failed,
        payload: error.message,
      });
    }
  };

  //Load Projects

  const loadProjects = () => {
    try {
      API.get("/api/image/loadProjects").then((res) => {
        if (res.data.error) {
          dispatch({
            type: Upload_Failed,
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: Load_Project,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch({
        type: Upload_Failed,
        payload: error.message,
      });
    }
  };

  // load language, dbms, frameworks
  const loadLanguages = () => {
    try {
      API.get("/api/image/loadLanguage").then((res) => {
        if (res.data.error) {
          dispatch({
            type: Upload_Failed,
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: Load_Project,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch({
        type: Upload_Failed,
        payload: error.message,
      });
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images: state.Images,
        Projects: state.Projects,
        error: state.error,
        message: state.message,
        addImage,
        updateImage,
        loadImage,
        deleteImage,
        addProject,
        deleteProject,
        loadProjects,
        loadLanguages,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
