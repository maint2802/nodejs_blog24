const { convertDocToObject } = require("../../utils/mongoose");
const Course = require("../../models/Course");
class CoursesController {
  // [GET] /courses
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("courses/courses", { courses: convertDocToObject(courses) });
      })
      .catch(next);
    // .catch((err) => next(err));
  }
  // [GET] /courses/:slug
  renderCourseDetail(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) => {
      res.render("courses/courseDetail", {
        course: convertDocToObject(course),
      });
    });
  }

  // [GET] /courses/create
  renderCreateCourse(req, res) {
    res.render("courses/create");
  }

  // [GET] /courses/store
  createCourse(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    formData.slug = req.body.slug + Date.now();
    const course = new Course(formData);
    course.save().then(() => {
      res.redirect("/courses");
    });
  }
  // [GET] /courses/:id/edit
  renderEdit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: convertDocToObject(course) });
      })
      .catch(next);
  }
  // [PUT] /courses/:id
  updateCourse(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    Course.findByIdAndUpdate(req.params.id, { $set: formData })
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
  // [DELETE] /courses/:id
  delete(req, res, next) {
    console.log("delete controller");
    console.log(req.params.id);
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
