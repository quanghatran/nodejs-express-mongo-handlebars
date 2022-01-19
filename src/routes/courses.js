const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/:slug", courseController.show);
// router.get("/", newController.index);

module.exports = router;
