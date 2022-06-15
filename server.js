const express = require("express");
const app = express();
const { auth } = require("./middleware/auth");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv").config({ path: "./config/config.env" });

const session = require("express-session");
const url = process.env.mongoURL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database Conntected");
  })
  .catch((err) => {
    console.log("Mongodb connection error");
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://janakachamith.herokuapp.com",
    credentials: true,
    methods: ["GET", "PUT", "POST"],
  })
);
app.use(express.static(path.join(__dirname, "/client/build")));
const con = "hello";
const loginRoutes = require("./routes/Login");
const imageRoutes = require("./routes/Image");

app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
// const storage = multer.diskStorage(storage);
app.use("/api/user", loginRoutes);
app.use("/api/image", imageRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

//server static assets if we in production

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Started!");
});
