const { convertDocToObject } = require("../../utils/mongoose");
const Course = require("../../models/Course");
class MeController {
  //[GET] /stored/courses
  storedCourses(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: convertDocToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
