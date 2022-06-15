const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["projects", "skills", "languages"],
    },
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    hashTags: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    site_url: {
      type: String,
      required: true,
    },
    skillCategory: {
      type: String,
      required: true,
      enum: ["dbms", "language", "framework", "tool", "none"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
