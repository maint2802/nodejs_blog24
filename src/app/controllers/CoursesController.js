const { convertDocToObject } = require("../../utils/mongoose");
const Course = require("../../models/Course");
class CoursesController {
  // [GET] /courses
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("courses", { courses: convertDocToObject(courses) });
      })
      .catch(next);
    // .catch((err) => next(err));
  }
  // [GET] /courses/:slug
  renderCourseDetail(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) => {
      res.render("courseDetail", { course: convertDocToObject(course) });
    });
  }
}

module.exports = new CoursesController();
