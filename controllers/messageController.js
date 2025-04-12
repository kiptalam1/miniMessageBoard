const db = require("../models/queries");

async function getMessages(req, res) {
	const messages = await db.getAllMessages();
	console.log("Messages: ", messages);
	res.render("index", { title: "Mini Message Board", messages });
}

async function newMessageForm(req, res) {
	res.render("form", { title: "Add new message" });
}

async function createNewMessagePost(req, res) {
	const { username, text } = req.body;
	await db.insertNewMessage(username, text);
	res.redirect("/");
}

async function viewIndividualMessage(req, res) {
	const { id } = req.params;
	try {
		const message = await db.getMessageById(id);
		if (!message) {
			return res.status(404).send("Message not found");
		}

		res.render("user", { message });
	} catch (err) {
		console.error(err);
		res.status(500).send("Server error");
	}
}

module.exports = {
	getMessages,
	newMessageForm,
	createNewMessagePost,
	viewIndividualMessage,
};
