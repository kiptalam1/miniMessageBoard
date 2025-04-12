// script
const { Client } = require("pg");
require("dotenv").config();
const useSSL = process.env.DATABASE_URL?.includes("neon.tech");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    text TEXT,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(username, text)
);

INSERT INTO messages (username, text)
VALUES 
    ('Call', 'Everything come back around full circle'),
    ('Don', 'Mtoto ni mfresh na ni tourist...'),
    ('KaneDraeke', 'Beat your as* and hide the Bible if God watching')
ON CONFLICT (username, text) DO NOTHING;
`;

async function main() {
	console.log("Seeding...");
    console.log("🌱 Seed DB URL:", process.env.DATABASE_URL); 
	const client = new Client({
		connectionString: process.env.DATABASE_URL,
		ssl: useSSL
			? {
					rejectUnauthorized: false,
			}
			: false,
	});

	try {
		await client.connect();
        console.log("✅ Connected to DB (Seeding)");
		await client.query(SQL);
		console.log("done seeding!");
	} catch (err) {
		console.error("Error seeding database:", err);
	} finally {
		await client.end();
	}
}
main();
