import "./style.css";

const recipeGrid = document.querySelector(".recipes");

const response = await fetch("/api/recipes");
const recipes = await response.json();

for (const recipe of recipes) {
	let ingredients = "";
	let instructions = "";

	for (const ingr of recipe.ingredients) {
		ingredients += `<li>${ingr}</li>`;
	}

	for (const step of recipe.instructions) {
		instructions += `<li><p>${step}</p></li>`;
	}

	recipeGrid.innerHTML += `
		<div class="card">
			<img class="image" src="${recipe.image_url}" alt="${recipe.name}" />

			<hgroup class="header">
				<h2 class="title">${recipe.name}</h3>
				<p class="description">${recipe.description}</p>
			</hgroup>

			<div role="separator"></div>

			<div class="content-container">
				<div class="content">
					<div class="info ingredients">
						<h3>Ingredients</h3>
						<ul class="list">${ingredients}</ul>
					</div>

					<div class="info instructions">
						<h3>Instructions</h3>
						<ol class="list">${instructions}</ol>
					</div>
				</div>

				<div class="scroll-shadow"></div>
			</div>
		</div>
	`;
}
