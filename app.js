const express = require("express");
const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
