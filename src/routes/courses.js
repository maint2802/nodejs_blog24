const express = require("express");

const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/create", coursesController.renderCreateCourse);
router.post("/store", coursesController.createCourse);
router.get("/:id/edit", coursesController.renderEdit);
router.post("/form-action", coursesController.formAction);
router.put("/:id", coursesController.updateCourse);
router.patch("/:id/restored", coursesController.restored);
router.delete("/:id", coursesController.delete);
router.delete("/:id/force-delete", coursesController.forceDelete);
router.get("/:slug", coursesController.renderCourseDetail);
router.get("/", coursesController.index);

module.exports = router;
