const express = require("express");

const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/create", coursesController.renderCreateCourse);
router.post("/store", coursesController.createCourse);
router.get("/:id/edit", coursesController.renderEdit);
router.put("/:id", coursesController.updateCourse);
router.delete("/:id", coursesController.delete);
router.get("/:slug", coursesController.renderCourseDetail);
router.get("/", coursesController.index);

module.exports = router;
