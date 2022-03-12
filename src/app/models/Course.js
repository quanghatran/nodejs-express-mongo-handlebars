const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
	{
		name: { type: String, require: true },
		description: { type: String },
		slug: { type: String },
		image: { type: String, require: true },
		videoId: { type: String, require: true },
		level: { type: String, require: true },
		slug: { type: String, slug: "name", unique: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Course", Course);
