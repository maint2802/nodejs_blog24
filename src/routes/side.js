const express = require("express");
const router = express.Router();
const sideController = require("../app/controllers/SideController");

// router.use("/search", sideController.search());
router.get("/search", sideController.search);
router.get("/", sideController.index);

module.exports = router;
