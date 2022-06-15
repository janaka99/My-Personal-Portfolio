const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema(
  {
    url: {
      String,
      required: true,
    },
    category: {
      String,
      required: true,
      enum: ["projects", "skills"],
    },
    title: {
      String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    path: {
      required: true,
      String,
    },
    description: {
      String,
      required: true,
    },
    site_url: {
      String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
