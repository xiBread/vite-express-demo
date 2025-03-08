import express from "express";
import ViteExpress from "vite-express";
import { neon } from "@neondatabase/serverless";

const app = express();
const sql = neon(process.env.DATABASE_URL);

app.get("/hello", async (req, res) => {
	const [row] = await sql`SELECT 'Hello, world!' as message`;

	res.send(row.message);
});

ViteExpress.listen(app, 3000, () =>
	console.log("Server is listening on port 3000..."),
);
