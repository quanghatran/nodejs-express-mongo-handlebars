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
	}

	// [GET] /course/:id/edit
	edit(req, res, next) {
		console.log("EDIT");
		Course.findById(req.params.id)
			.then((course) => {
				res.render("courses/edit", { course: mongooseToObject(course) });
			})
			.catch(next);
	}

	// [PUT] /course/:id
	update(req, res, next) {
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => {
				res.redirect("/me/stored/courses");
			})
			.catch(next);
	}

	// [DELETE] /course/:id
	destroy(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => {
				res.redirect("back");
			})
			.catch(next);
	}
}

module.exports = new CourseController();
