const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last modified: " + document.lastModified;

const bugContainer = document.getElementById('bug-selector');
const bugs = [
    {
        species: "Pseudovates chlorophaea",
        commonName: "Texas Unicorn Mantis",
        environment: "Grassland",
        food: "Flies, moths",
        img: "images/unicornbug.webp"
    },
    {
        species: "Neotibicen tibicen",
        commonName: "Swamp Cicada",
        environment: "Grassland, forest, swamp",
        food: "Sap",
        img: "images/swampbug.webp"
    },
    {
        species: "Arenivaga bolliana",
        commonName: "Boll's Sandroach",
        environment: "Forest, grassland",
        food: "Animal droppings",
        img: "images/sandroachbug.webp"
    },
    {
        species: "Lethocerus americanus",
        commonName: "American Giant Water Bug",
        environment: "Aquatic",
        food: "Frogs, fish",
        img: "images/waterbug.webp"
    },
    {
        species: "Strategus aloeus",
        commonName: "Ox Beetle",
        environment: "Forest, grassland",
        food: "Fruit, leaves",
        img: "images/oxbug.webp"
    },
    {
        species: "Argia hinei",
        commonName: "Lavender Dancer",
        environment: "Aquatic",
        food: "Flies, mosquitos",
        img: "images/lavenderbug.webp"
    },
    {
        species: "Photinus pyralis",
        commonName: "Big Dipper Firefly",
        environment: "Grassland, forest",
        food: "Snails, worms",
        img: "images/dipperbug.webp"
    },
    {
        species: "Phobaeticus serratipes",
        commonName: "Giant Walkingstick",
        environment: "Forest",
        food: "Leaves",
        img: "images/walkingbug"
    }

]



createBugCard(bugs);

const all = document.querySelector("#all");
const grasslandBug = document.querySelector("#grassland");
const forestBug = document.querySelector("#forest");
const aquaticBug = document.querySelector("#aquatic");

all.addEventListener("click", () => {
	createBugCard(bugs);
});

grasslandBug.addEventListener("click", () => {
	const grasslandbugs = bugs.filter(bug => (bug.environment = "Grassland"));
    createBugCard(grasslandBugs);
});

forestBug.addEventListener("click", () => {
	const forestbugs = bugs.filter(bug => (bug.environment = "Forest"));
	createBugCard(forestBugs);
});

aquaticBug.addEventListener("click", () => {
	const aquaticbugs = bugs.filter(bug => (bug.environment = "Aquatic"));
	createBugCard(aquaticBugs);
});


function createBugCard(filteredbugs) {
	document.querySelector("#bug-selector").innerHTML = "";
	filteredbugs.forEach(bug => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let species = document.createElement("p");
		let environment = document.createElement("p");
		let food = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = bug.commonName;
		species.innerHTML = `<span class="description">Scientific name:</span> ${bug.species}`;
		environment.innerHTML = `<span class="description">Environment:</span> ${bug.environment}`;
		food.innerHTML = `<span class="description">Food:</span> ${bug.food}`;
		img.setAttribute("src", bug.imageUrl);
		img.setAttribute("alt", `An image of ${bug.commonName}`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(species);
		card.appendChild(environment);
		card.appendChild(food);
		card.append(img);

		document.querySelector("#bugselector").appendChild(card);
	});
}