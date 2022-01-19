const newsRoutes = require("./news");
const siteRoutes = require("./site");
const coursesRoutes = require("./courses");

function route(app) {
	app.use("/news", newsRoutes);

	app.use("/course", coursesRoutes);

	app.use("/", siteRoutes);
}

module.exports = route;
