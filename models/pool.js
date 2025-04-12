require("dotenv").config();
const { Pool } = require("pg");

console.log("🛰️ App DB URL:", process.env.DATABASE_URL);

module.exports = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
});
