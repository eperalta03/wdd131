const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedEl = document.getElementById('lastModified');
lastModifiedEl.textContent = `Last modified: ${document.lastModified}`;


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  if (navMenu.classList.contains('show')) {
    hamburger.textContent = 'X'; 
  } else {
    hamburger.textContent = '☰';  
  }
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
    templeName: "Auckland New Zealand",
    location: "Auckland, New Zealand",
    dedicated: "2025, April, 25",
    area: 45456,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
  },
  {
    templeName: "Barranquila Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
  },
  {
    templeName: "Okinawa Japan",
    location: "Okinawa-shi, Okinawa-ken, Okinawa, Japan",
    dedicated: "2023, November, 12",
    area: 12437,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
  }
];

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    container.innerHTML = "";
    const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]); 
    return year < 1990;
  });

  createTemplesCard(oldTemples);
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
    container.innerHTML = "";
    const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]); 
    return year > 2000;
  });

    createTemplesCard(oldTemples);
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
    container.innerHTML = ""; 
    createTemplesCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
    container.innerHTML = ""; 
    createTemplesCard(temples.filter(temple => temple.area < 10000));
});

const container = document.getElementById("cardContainer");

function createTemplesCard(temples){
    temples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
    
    <div class="card-content">
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Size:</strong> ${temple.area.toLocaleString()} m²</p>
    </div>
    <img 
    src="${temple.imageUrl}" 
        alt="${temple.templeName} Temple" 
        loading="lazy"
        >
        `;
        
        container.appendChild(card);
    });
}

createTemplesCard(temples);