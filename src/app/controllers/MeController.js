const { convertDocToObject } = require("../../utils/mongoose");
const Course = require("../../models/Course");
class MeController {
  //[GET] /stored/courses
  storedCourses(req, res, next) {
    const courses = Course.find();

    if (req.query.hasOwnProperty("_sort")) {
      courses.sort({ [req.query.column]: req.query.type });
    }
    Promise.all([courses, Course.countDocumentsWithDeleted({ deleted: true })])
      .then(([courses, countDel]) => {
        res.render("me/stored-courses", {
          courses: convertDocToObject(courses),
          countDel,
        });
      })
      .catch(next);
  }
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: convertDocToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
