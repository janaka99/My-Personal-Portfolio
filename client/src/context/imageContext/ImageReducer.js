import {
  Delete_Image,
  Add_Image,
  Load_Image,
  Add_Project,
  Load_Project,
  Delete_Project,
  Upload_Failed,
} from "./ImageActions";

const ImageReducer = (state, action) => {
  switch (action.type) {
    case Delete_Image:
    case Add_Image:
    case Load_Image:
      return {
        ...state,
        Images: action.payload,
      };
    case Add_Project:
    case Load_Project:
    case Delete_Project:
      return {
        ...state,
        Projects: action.payload,
      };
    case Upload_Failed:
      return {
        ...state,
        error: action.payload,
      };
  }
};

export default ImageReducer;
