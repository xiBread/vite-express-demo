import express from "express";
import ViteExpress from "vite-express";
import { neon } from "@neondatabase/serverless";

const app = express();
const router = express.Router();

const sql = neon(process.env.DATABASE_URL);

router.get("/hello", async (req, res) => {
	const [row] = await sql`SELECT 'Hello, World!' as message`;

	res.send(row.message);
});

app.use("/api", router);

ViteExpress.listen(app, 5173, () => {
	console.log("Server is listening on port 5173.");
});

export default app;
