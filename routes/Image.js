const router = require("express").Router();
const Project = require("../models/Skill");
const { auth } = require("../middleware/auth");
const { storage, cloudinary } = require("../cloudinary/index");
const multer = require("multer");
const { expressError } = require("../middleware/ExpressError");

const upload = multer({ storage: storage });

router.post("/add-skill", auth, upload.single("file"), async (req, res) => {
  try {
    const data = await JSON.parse(req.body.projectData);
    const input = new Project({
      url: req.file.filename,
      category: data.type,
      title: data.title,
      userId: req.userData.id,
      path: req.file.path,
      description: data.description,
      site_url: data.site_url,
      skillCategory: data.skillCategory,
    });

    const newProduct = await input.save();
    if ((newProduct === input) === true) {
      try {
        Project.find({ category: data.type }).exec(function (err, products) {
          if (products) {
            res.status(200).json({ products });
          } else {
            console.log("not found any images");
            res.status(200).json({ error: "Please add new Skills" });
          }
        });
      } catch (err) {
        res.status(200).json({ error: "Please add new Skills" });
      }
    } else {
      res.status(200).json({ error: "error" });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "errorMessage" });
  }
});

router.get("/loadSkills/:category", (req, res) => {
  const category = req.params["category"];
  try {
    if ((category === "all") === true) {
      Project.find().exec(async function (err, products) {
        if (err) {
          console.log(err);
          res.status(200).json({ error: "Please add new Skills" });
        } else if (products) {
          res.status(200).json({ products });
        } else {
          console.log("not found any images");
          res.status(200).json({ error: "Please add new Skills" });
        }
      });
    } else {
      Project.find({ category }).exec(async function (err, products) {
        if (err) {
          console.log(err);
          res.status(200).json({ error: "Please add new Skills" });
        } else if (products) {
          res.status(200).json({ products });
        } else {
          console.log("not found any images");
          res.status(200).json({ error: "Please add new Skills" });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: "Please add new Skills" });
  }
});

router.post("/deleteItem/", auth, async (req, res) => {
  try {
    const path = req.body.id.url;
    const id = req.body.id._id;
    // const id = "easdasd";
    if (path || id) {
      Project.findOne({ _id: id }).exec(async function (err, item) {
        if (item) {
          const hold = await Project.deleteOne({ _id: req.body.id._id });
          if (hold.acknowledged === true || (deletedCount == 1) == true) {
            await cloudinary.uploader.destroy(item.url);
            try {
              Project.find({ category: req.body.id.category }).exec(
                async function (err, products) {
                  if (products) {
                    res.status(200).json({ products });
                  } else {
                    console.log("not found any images");
                    res.status(200).json({ error: "Please add new Skills" });
                  }
                }
              );
            } catch (err) {
              res.status(200).json({ error: "Please add new Skills" });
            }
          }
        } else {
          res.status(200).json({ error: "Unable to to delete try again" });
        }
      });
    } else {
      res.status(200).json({ error: "Unable to to delete try again" });
    }
  } catch (err) {
    console.log(err);
  }
  //
});

module.exports = router;
