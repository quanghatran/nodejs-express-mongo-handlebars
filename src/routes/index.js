const newsRoutes = require("./news");
const siteRoutes = require("./site");
const coursesRoutes = require("./courses");
const meRoutes = require("./me");

function route(app) {
	app.use("/me", meRoutes);

	app.use("/news", newsRoutes);

	app.use("/course", coursesRoutes);

	app.use("/", siteRoutes);
}

module.exports = route;
