import express from "express";
import ViteExpress from "vite-express";
import { neon } from "@neondatabase/serverless";

const app = express();
const router = express.Router();

const sql = neon(process.env.DATABASE_URL);

app.use("/api", router);

router.get("/recipes", async (req, res) => {
	const recipes = await sql`SELECT * FROM recipes`;

	res.json(recipes);
});

ViteExpress.listen(app, 5173, () => {
	console.log("Server is listening on port 5173.");
});

export default app;
