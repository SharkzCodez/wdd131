const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last modified: " + document.lastModified;

const bugContainer = document.getElementById('bugSelector');
const bugs = [
    {
        species: "Pseudovates chlorophaea",
        commonName: "Texas Unicorn Mantis",
        environment: "Grassland",
        food: "Flies, moths",
        imageURL: "https://inaturalist-open-data.s3.amazonaws.com/photos/335937802/large.jpg"
    },
    {
        species: "Neotibicen tibicen",
        commonName: "Swamp Cicada",
        environment: "Grassland, forest, swamp",
        food: "Sap",
        imageURL: "https://th.bing.com/th/id/R.1c5eb63f806210ddf78fc4959557a31a?rik=JPkEI0xI%2fJxT2g&pid=ImgRaw&r=0"
    },
    {
        species: "Arenivaga bolliana",
        commonName: "Boll's Sandroach",
        environment: "Forest, grassland",
        food: "Animal droppings",
        imageURL: "https://inaturalist-open-data.s3.amazonaws.com/photos/1702776/large.JPG"
    },
    {
        species: "Lethocerus americanus",
        commonName: "American Giant Water Bug",
        environment: "Aquatic",
        food: "Frogs, fish",
        imageURL: "https://pearsonecological.com/wp-content/uploads/47930863703_df5daf8739_k.jpg"
    },
    {
        species: "Strategus aloeus",
        commonName: "Ox Beetle",
        environment: "Forest, grassland",
        food: "Fruit, leaves",
        imageURL: "https://th.bing.com/th/id/R.078bdf30027c8553c51a96f41b8737fd?rik=Ba57EZ6YkrhZcQ&riu=http%3a%2f%2fwww.thehibbitts.net%2ftroy%2fphoto%2fmisc_arthropods%2fstrategus.anteaus.sc.dillon.17.1.0559.jpg&ehk=jcfJx%2bQ1e8If93MqoM%2fWw8G%2bQyqHqAmKAai5CA4gP%2bY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        species: "Argia hinei",
        commonName: "Lavender Dancer",
        environment: "Aquatic",
        food: "Flies, mosquitos",
        imageURL: "https://th.bing.com/th/id/R.da101eaf862edb757eafe16385bcf38c?rik=%2bnD%2fjFc0dshJCw&riu=http%3a%2f%2fazdragonfly.org%2fsites%2fdefault%2ffiles%2fstyles%2fmain-content-size%2fpublic%2fspecies%2flavender-dancer%2fem1x3007dxos.jpg%3fitok%3dd81Ekgsx&ehk=UBxokbUutUrmovgXRiocmv2Tx0yedgJOm8UcFox5W9U%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        species: "Photinus pyralis",
        commonName: "Big Dipper Firefly",
        environment: "Grassland, forest",
        food: "Snails, worms",
        imageURL: "https://lh3.googleusercontent.com/o6g62d7gatcz-M99oiaaFL1bhtJPmVk8lqAYtgD2bRL3-TItb_ziwE9olzdnYpS-nU8xM2Q-Ljs_1Hrurjxp=s580"
    },
    {
        species: "Phobaeticus serratipes",
        commonName: "Giant Walkingstick",
        environment: "Forest",
        food: "Leaves",
        imageURL: "https://inaturalist-open-data.s3.amazonaws.com/photos/142248593/large.jpg"
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
	const grasslandbugs = bugs.filter(bug => (bug.environment === "Grassland"));
    createBugCard(grasslandBugs);
});

forestBug.addEventListener("click", () => {
	const forestbugs = bugs.filter(bug => (bug.environment === "Forest"));
	createBugCard(forestBugs);
});

aquaticBug.addEventListener("click", () => {
	const aquaticbugs = bugs.filter(bug => (bug.environment === "Aquatic"));
	createBugCard(aquaticBugs);
});


function createBugCard(filteredbugs) {
	document.querySelector("#bugSelector").innerHTML = "";
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

		document.querySelector("#bugSelector").appendChild(card);
	});
}