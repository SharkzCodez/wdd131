document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = new Date();

const today = new Date();

//let lastModified = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",
    {
        dateStyle: "lastModified"

    }
).format(today)}`;



const templesYippee = document.getElementById('templesYippee');
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
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

function createTempleCard(temple)  {
    const templeElement = document.createElement('div');
    templeElement.classList.add('temple-card');

    const templeName = document.createElement('h2');
    templeName.textContent = temple.templeName;
    templeElement.appendChild(templeName);

    const templeLocation = document.createElement('p');
    templeLocation.textContent = `Location: ${temple.location}`;
    templeElement.appendChild(templeLocation);

    const templeDedicated = document.createElement('p')
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeElement.appendChild(templeDedicated);

    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area}`;
    templeElement.appendChild(templeArea)

    const templeImage = document.createElement('img')
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading= 'lazy';
    templeElement.appendChild(templeImage);

    return templeElement; 
}

function displayAllTemples() {
    templeContainer.innerHTML = ''; 
    temples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
        }
    );
}



function filterOldTemples() {
    templeContainer.innerHTML = ''; 
    const oldTemples = temples.filter(function(temple) {
        return parseInt(temple.dedicated.split(',')[0]) < 2000;
        }
    );
    oldTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
        }
    );
}

function filterNewTemples() {
    templeContainer.innerHTML = ''; 
    const newTemples = temples.filter(function(temple) {
        return parseInt(temple.dedicated.split(',')[0]) > 2000;
        }
    );
    newTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
        }
    );
}

function filterLargeTemples() {
    templeContainer.innerHTML = ''; 
    const largeTemples = temples.filter(function(temple) {
        return temple.area > 90000;
        }
    );
    largeTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
        }
    );
}

function filterSmallTemples() {
    templeContainer.innerHTML = ''; 
    const smallTemples = temples.filter(function(temple) {
        return temple.area < 10000;
        }
    );
    smallTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
        }
    );
}

const homeLink = document.getElementById('all');
const oldLink = document.getElementById('old');
const newLink = document.getElementById('new');
const largeLink = document.getElementById('large');
const smallLink = document.getElementById('small');

homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    displayAllTemples(); 
    }
);

oldLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterOldTemples(); 
    }
);

newLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterNewTemples(); 
    }
);

largeLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterLargeTemples(); 
    }
);

smallLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterSmallTemples(); 
    }
);