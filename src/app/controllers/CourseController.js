const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class CourseController {
	// [GET] /course/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) =>
				res.render("courses/show", { course: mongooseToObject(course) })
			)
			.catch(next);
	}

	// [GET] /course/create
	create(req, res, next) {
		res.render("courses/create");
	}

	// [POST] /course/store
	store(req, res, next) {
		const formData = req.body;
		formData.image = `https://www.youtube.com/watch?v=${req.body.videoId}`;
		const course = new Course(formData);
		course
			.save()
			.then(() => res.redirect("/"))
			.catch((err) => console.log("ERROR: ", err));

		// res.send("course saved!!!");
	}
}

module.exports = new CourseController();
