const Course = require("../../models/Course");
const { convertDocToObject } = require("../../utils/mongoose");
class SideController {
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("home", { courses: convertDocToObject(courses) });
      })
      .catch(next);
    // .catch((err) => next(err));
  }
  search(req, res) {
    res.render("search");
  }
  postSearch(req, res) {
    res.render("search");
    console.log("post search");
    console.log(req.body);
  }
}
module.exports = new SideController();
