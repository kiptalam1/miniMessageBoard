const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function insertNewMessage(username, text) {
	await pool.query("INSERT INTO messages (username, text) VALUES($1,$2)", [
		username,
		text,
	]);
}

async function getMessageById(id) {
	const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
		id,
	]);
	return rows[0];
}
module.exports = {
	getAllMessages,
	insertNewMessage,
	getMessageById,
};
