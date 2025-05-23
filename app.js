const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const PORT = process.env.PORT || 8080;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// routes
app.use("/", indexRouter);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
