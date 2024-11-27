const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Course = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: String,
    level: { type: String },
    createdAt: { type: Date, default: Date.now },
    slug: { type: String, slug: ["name", "createdAt"] },
  },
  { timestamps: true } //gen createAt vs updateAt
);

module.exports = mongoose.model("Course", Course);
