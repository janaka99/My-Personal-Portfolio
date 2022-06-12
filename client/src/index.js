import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ImageState from "./context/imageContext/ImageState";
import AuthState from "./context/AuthContext/AuthState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ImageState>
        <App />
      </ImageState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
