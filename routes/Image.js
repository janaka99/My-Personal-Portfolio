const router = require("express").Router();
const Project = require("../models/Skill");
const { auth } = require("../middleware/auth");
const { storage, cloudinary } = require("../cloudinary/index");
const multer = require("multer");
const { expressError } = require("../middleware/ExpressError");

const upload = multer({ storage: storage }).single("file");
// upload.single("file"),
router.post("/add-skill", auth, upload, async (req, res) => {
  try {
    const data = await JSON.parse(req.body.projectData);
    console.log(req.file);
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
            cloudinary.uploader.destroy(req.file.filename);
            console.log("not found any images");
            res.status(200).json({ error: "Please add new Skills" });
          }
        });
      } catch (err) {
        cloudinary.uploader.destroy(req.file.filename);
        res.status(200).json({ error: "Please add new Skills" });
      }
    } else {
      cloudinary.uploader.destroy(req.file.filename);
      res.status(200).json({ error: "error" });
    }
  } catch (error) {
    cloudinary.uploader.destroy(req.file.filename);
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

router.post("/update", upload, async (req, res) => {
  try {
    if (req.body.imageData) {
      const data = await req.body.imageData;

      Project.findByIdAndUpdate(data.id, data).exec(function (err, result) {
        if (result) {
          Project.find({ category: data.category }).exec(async function (
            err,
            products
          ) {
            if (products) {
              res.status(200).json({ products });
            } else {
              res.status(200).json({ error: "Please add new Skills" });
            }
          });
        } else {
          console.log(err);
          res.status(200).json({ error: "Update failed" });
        }
      });
    } else if (1 === 1) {
      try {
        console.log("hehe work1");
        const data = JSON.parse(req.body.projectupdateData);
        console.log(data.url);
        console.log(req.file.filename);
        console.log("hehe work2");

        const UpdatedProject = {
          title: data.title,
          type: data.type,
          description: data.description,
          site_url: data.site_url,
          hashtags: data.hashTags,
          id: data.id,
          category: data.category,
          url: req.file.filename,
          path: req.file.path,
        };
        console.log("hehe6");

        Project.findByIdAndUpdate(
          data.id,
          UpdatedProject,
          async (err, result) => {
            if (result) {
              await cloudinary.uploader.destroy(result.url);

              Project.find({ category: data.category }).exec(async function (
                err,
                products
              ) {
                if (products) {
                  console.log("hehe2");

                  res.status(200).json({ products });
                } else {
                  console.log("hehe3");

                  console.log("not found any images");
                  res.status(200).json({ error: "Please add new Skills" });
                }
              });
            } else {
              console.log("hehe4");
              cloudinary.uploader.destroy(req.file.filename);
              res.status(200).json({ error: "Update failed" });
            }
          }
        );
      } catch (error) {
        console.log("hehe5");

        await cloudinary.uploader.destroy(req.file.filename);
        res.status(500).json({ error: "Update Failed" });
      }
    } else {
      console.log("Upload failed");

      await cloudinary.uploader.destroy(req.file.filename);
      res.status(200).json({ error: "Update failed" });
    }
  } catch (error) {
    console.log("Upload failed ss");
    res.status(200).json({ error: "Update failed" });
  }
});

module.exports = router;
