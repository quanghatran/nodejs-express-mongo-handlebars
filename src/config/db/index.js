const mongoose = require("mongoose");

async function connect() {
	try {
		await mongoose.connect("mongodb://localhost:27017/blog_me_dev", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("connect successfully!d!!");
	} catch (error) {
		console.log("connect failure!!!");
	}
}

module.exports = { connect };
