const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	menuButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28",
        area: 24170,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
    },
    {
        templeName: "Snowflake Arizona",
        location: "Snowflake, Arizona, United States",
        dedicated: "2002, March, 3",
        area: 18621,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/snowflake-arizona/400x250/snowflake-temple-lds-845024-wallpaper.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Fort Lauderdale, Florida, United States",
        dedicated: "2014, May, 4",
        area: 28000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/400x250/fort-lauderdale-florida-temple-1220611-wallpaper.jpg"
    }
];

createTempleCard(temples);

const home = document.querySelector("#home");
const oldTemple = document.querySelector("#old");
const newTemple = document.querySelector("#newTemple");
const bigTemple = document.querySelector("#bigTemple");
const smallTemple = document.querySelector("#smallTemple");

home.addEventListener("click", () => {
	createTempleCard(temples);
});

oldTemple.addEventListener("click", () => {
	const oldTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')).getFullYear() < 1900);
    createTempleCard(oldTemples);
});

newTemple.addEventListener("click", () => {
	const newTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')).getFullYear() > 2000);
	createTempleCard(newTemples);
});

bigTemple.addEventListener("click", () => {
	const bigTemples = temples.filter(temple => (temple.area > 90000));
	createTempleCard(bigTemples);
});

smallTemple.addEventListener("click", () => {
	const smallTemples = temples.filter(temple => (temple.area < 10000));
	createTempleCard(smallTemples);
});

function createTempleCard(filteredTemples) {
	document.querySelector("#templeSelector").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="description">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="description">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="description">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.append(img);

		document.querySelector("#templeSelector").appendChild(card);
	});
}

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = new Date();

const today = new Date();

//let lastModified = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",
    {
        dateStyle: "lastModified"

    }
).format(today)}`;