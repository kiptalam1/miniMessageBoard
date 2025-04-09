const messages = require("../models/messageModel");
exports.index = (req, res) => {
	res.render("index", { title: "Mini Message Board", messages: messages });
};

exports.newMessageForm = (req, res) => {
	res.render("form", { title: "Add new message" });
};

exports.handleNewMessage = (req, res) => {
	const { user, text } = req.body;

	messages.push({
		text: text,
		user: user,
		added: new Date(),
	});
	res.redirect("/");
};

exports.viewIndividualMessage = (req,res) => {
	const { id } = req.params;
	const message = messages[parseInt(id)]
	if (!message) {
		return res.status(404).send("Message not found");
	}
	res.render('user', { message })
};