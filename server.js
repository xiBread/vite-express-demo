import fs from "node:fs/promises";
import express from "express";
import formidable from "formidable";
import ViteExpress from "vite-express";
import { neon } from "@neondatabase/serverless";
import { put } from "@vercel/blob";

const app = express();
const router = express.Router();

const sql = neon(process.env.DATABASE_URL);

app.use("/api", router);

router.get("/recipes", async (req, res) => {
	const recipes = await sql`SELECT * FROM recipes`;

	res.json(recipes);
});

router.post("/recipes", async (req, res) => {
	const form = formidable();
	const [fields, files] = await form.parse(req);

	const image = files.image[0];
	const ingredients = fields.ingredients[0].split("\n").map((i) => i.trim());
	const instructions = fields.instructions[0].split("\n").map((i) => i.trim());

	const buffer = await fs.readFile(image.filepath);
	const blob = await put(image.originalFilename, buffer, {
		access: "public",
	});

	await sql`
		INSERT INTO recipes (name, description, image_url, ingredients, instructions)
		VALUES (${fields.name[0]}, ${fields.description[0]}, ${blob.url}, ${ingredients}, ${instructions})
	`;

	res.redirect(303, "/");
});

ViteExpress.listen(app, 5173, () => {
	console.log("Server is listening on port 5173.");
});

export default app;
