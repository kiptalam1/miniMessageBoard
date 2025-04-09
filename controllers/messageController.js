const messages = require("../models/messageModel");
exports.index = (req, res) => {
	res.render("index", { title: "Mini Message Board", messages: messages });
};

exports.newMessageForm = (req, res) => {
	res.render("form", { title: "Add new message" });
};
