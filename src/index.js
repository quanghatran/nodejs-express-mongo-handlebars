const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

// SET UP DATABASE
const db = require("./config/db");

// connect to database
db.connect();

// SET UP ROUTE
const route = require("./routes");

// SET UP STATIC FILE
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP LOGGER
app.use(morgan("combined"));

// SET UP VIEW ENGINE
app.engine(
	"hbs",
	engine({
		extname: ".hbs",
	})
);
app.set("view engine", "hbs");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
