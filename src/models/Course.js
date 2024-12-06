const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_del = require("mongoose-delete");
const CourseSchema = new mongoose.Schema(
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

mongoose.plugin(slug);
CourseSchema.plugin(mongoose_del, { deletedAt: true, overrideMethods: "all" });

// custom query helpers
CourseSchema.query.sortable = function (req, res) {
  if (req.query.hasOwnProperty("_sort")) {
    return this.sort({
      [req.query.column]: res.locals._sort.type,
    });
  }
  return this;
};

module.exports = mongoose.model("Course", CourseSchema);
