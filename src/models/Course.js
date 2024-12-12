const slug = require("mongoose-slug-generator");
const mongoose_del = require("mongoose-delete");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const CourseSchema = new mongoose.Schema(
  {
    _id: { type: Number },
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: String,
    level: { type: String },
    createdAt: { type: Date, default: Date.now },
    slug: { type: String, slug: ["name", "createdAt"] },
  },
  { timestamps: true, _id: false } //gen createAt vs updateAt
);

mongoose.plugin(slug);
CourseSchema.plugin(mongoose_del, { deletedAt: true, overrideMethods: "all" });
CourseSchema.plugin(AutoIncrement);

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
