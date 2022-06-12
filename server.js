const express = require("express");
const app = express();
const { auth } = require("./middleware/auth");
const { expressError } = require("./middleware/ExpressError");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv").config({ path: "./config/config.env" });
const { storage, cloudinary } = require("./cloudinary/index");

const { con } = require("./connection/connection");
const session = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const loginRoutes = require("./routes/Login");

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

console.log(process.env);

app.use("/api/user", loginRoutes);

const upload = multer({ storage: storage });

app.post("/api/upload", auth, upload.single("file"), async (req, res) => {
  try {
    const data = await JSON.parse(req.body.titleData);
    const user = await req.userData.userId;
    console.log(user);
    console.log(data);
    con.query(
      "INSERT INTO images(url ,type, title, userId, path) values(?,?,?,?, ?)",
      [req.file.filename, data.type, data.title, user, req.file.path],
      async function (err, result) {
        if (err) {
          console.log(err);
          const errorMessage = await expressError(err.code);
          res.status(200).json({ error: errorMessage });
        } else {
          res.status(200).json({ message: "Image Upload SuccessFul" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/loadSkills", (req, res) => {
  console.log("render");
  con.query('SELECT * FROM IMAGES WHERE type="skills"', (err, result) => {
    if (err) {
      res.status(201).json({ error: "Something wrong" });
    } else {
      res.status(201).json(result);
    }
  });
});

app.post("/api/deleteItem", auth, async (req, res) => {
  con.query(
    "SELECT * FROM IMAGES WHERE imageId=?",
    req.body.id.imageId,
    (err, result) => {
      if (err) {
        res.status(201).json({ error: "Something wrong" });
      } else {
        const path = result[0].url;
        try {
          cloudinary.uploader.destroy(path);
        } catch (error) {
          res.status(201).json({ error: "Something wrong" });
        }
        con.query(
          "DELETE FROM IMAGES WHERE imageId=?",
          result[0].imageId,
          (err, result) => {
            if (err) {
              res.status(201).json({ error: "Something wrong" });
            } else {
              con.query("SELECT * FROM images", (err, result) => {
                if (err) {
                  res.status(201).json({ error: "Something wrong" });
                } else {
                  res.status(201).json(result);
                }
              });
            }
          }
        );
      }
    }
  );
});

/////////Sample Project Routes

//add new project

app.post("/api/addProject", auth, upload.single("file"), async (req, res) => {
  try {
    const data = await JSON.parse(req.body.projectData);
    console.log(req.file);

    con.query(
      "INSERT INTO sample(url ,category, title, userId, path, description, site_url) values(?,?,?,?, ?,?,?)",
      [
        req.file.filename,
        data.category,
        data.title,
        "1",
        req.file.path,
        data.description,
        data.url,
      ],
      (err, result) => {
        if (err) {
          res.status(201).json({ error: "Something wrong" });
        } else {
          con.query("SELECT * FROM sample", (err, result) => {
            if (err) {
              res.status(201).json({ error: "Something wrong" });
            } else {
              res.status(201).json(result);
            }
          });
        }
      }
    );
  } catch (error) {
    res.status(201).json({ error: "Something wrong" });
  }
});

//delete project

app.post("/api/deleteProject", auth, async (req, res) => {
  con.query(
    "SELECT * FROM sample WHERE imageId=?",
    req.body.id.imageId,
    (err, result) => {
      if (err) {
        res.status(201).json({ error: "Something wrong" });
      } else {
        const path = result[0].url;
        try {
          cloudinary.uploader.destroy(path);
        } catch (error) {
          res.status(201).json({ error: "Something wrong" });
        }

        con.query(
          "DELETE FROM sample WHERE imageId=?",
          result[0].imageId,
          (err, result) => {
            if (err) {
              res.status(201).json({ error: "Something wrong" });
            } else {
              con.query("SELECT * FROM sample", (err, result) => {
                if (err) {
                  res.status(201).json({ error: "Something wrong" });
                } else {
                  res.status(201).json(result);
                }
              });
            }
          }
        );
      }
    }
  );
});

//load projects
app.get("/api/loadProjects", async (req, res) => {
  con.query('SELECT * FROM sample where category="projects"', (err, result) => {
    if (err) {
      res.status(201).json({ error: "loading failed" });
    } else {
      res.status(201).json(result);
    }
  });
});

//load language, tools, dbms and frameworks
app.get("/api/loadLanguage", async (req, res) => {
  con.query(
    'SELECT * FROM sample where category In ("dbms", "languages" ,"frameworks", "tools") ',
    (err, result) => {
      if (err) {
        res.status(201).json({ error: "loading failed" });
      } else {
        res.status(201).json(result);
      }
    }
  );
});

//server static assets if we in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Started!");
});
