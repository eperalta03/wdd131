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

if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/mexican_ruins.html'))  {
    const ruins = [
    {
        name: "Teotihuacán",
        culture: "Teotihuacano",
        period: "Classic",
        location: "State of Mexico, Mexico",
        use: "Ceremonial and residential city",
        image: "https://img.gruporeforma.com/imagenes/960x640/5/836/4835236.jpg"
    },
    {
        name: "Chichén Itzá",
        culture: "Maya",
        period: "Early Postclassic",
        location: "Yucatán, Mexico",
        use: "Ceremonial center and political hub",
        image: "https://storage.googleapis.com/gx-global-cms/mkt/6f7dd1fd-cd8a-4713-a8d8-80e27bd41457.jpg"
    },
    {
        name: "Palenque",
        culture: "Maya",
        period: "Late Classic",
        location: "Chiapas, Mexico",
        use: "Ceremonial center and royal palace complex",
        image:"https://i.natgeofe.com/n/f1f28eb9-bbe0-4fab-bdcd-678016f7f6e8/24745.jpg"
    },
    {
        name: "Monte Albán",
        culture: "Zapotec",
        period: "Classic",
        location: "Oaxaca, Mexico",
        use: "Ceremonial center and political capital",
        image:"https://media.tacdn.com/media/attractions-splice-spp-674x446/10/07/a9/25.jpg"
    },
    {
        name: "El Tajín",
        culture: "Totonac",
        period: "Late Classic",
        location: "Veracruz, Mexico",
        use: "Ceremonial center, especially for ball games",
        image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/el-tajin-veracruz-flickr-luis-c.jpg"
    },
    {
        name: "Uxmal",
        culture: "Maya",
        period: "Late Classic",
        location: "Yucatán, Mexico",
        use: "Ceremonial and administrative center",
        image: "https://www.yucatan.gob.mx/docs/galerias/uxmal/0.jpg"
    },
    {
        name: "Cobá",
        culture: "Maya",
        period: "Classic",
        location: "Quintana Roo, Mexico",
        use: "Urban settlement and trade hub",
        image: "https://images.inmexico.com/2016/07/ThinkstockPhotos-medwt31030.jpg"
    },
    {
        name: "Tulum",
        culture: "Maya",
        period: "Late Postclassic",
        location: "Quintana Roo, Mexico",
        use: "Walled city and coastal trade port",
        image:"https://aws-tiqets-cdn.imgix.net/images/content/cd9005609cef43b7b673eb46dd15f49a.jpeg?auto=format%2Ccompress&fit=crop&ixlib=python-3.2.1&q=70&w=600&s=e39fae36ad801d54a22aca6b429ddf44"
    },
    {
        name: "Mitla",
        culture: "Zapotec",
        period: "Late Classic",
        location: "Oaxaca, Mexico",
        use: "Ceremonial center and religious site",
        image:"https://mxc.com.mx/wp-content/uploads/2024/08/templo-mitla.jpg-12.jpg"
    },
    {
        name:"Yagul",
        culture: "Zapotec",
        period: "Classic",
        location: "Oaxaca, México",
        use:"Ceremonial and residential site",
        image: "https://playas.com.mx/wp-content/uploads/2025/04/arton3905.jpg"
    },
    {
        name: "Quetzalcoatl Temple",
        culture: "Teotihuacano",
        period: "Classic",
        location: "State of Mexico, Mexico",
        use:"Religious temple and ritual site",
        image:"https://uncoveredhistory.com/images/W2-0035-Teotihuacan-Temple-of-Quetzalcoatl-500x319.jpg"
    },
    {
        name: "La Quemada",
        culture: "Chalchihuites",
        period: "Epiclassic",
        location: "Zacatecas, México",
        use: "Fortress and ceremonial center",
        image: "https://elmunicipalqro.com/wp-content/uploads/2021/09/Quemada-2.jpg"
    }
    ];

    const main = document.querySelector('main');
    const container = document.getElementById("cardContainer");
    const otherSections = Array.from(main.querySelectorAll('section')).filter(section => section.id !== "cardContainer");
    const hero = document.querySelector('main .hero');

    function filterByCulture(culture) {
    otherSections.forEach(section => {
        section.style.display = 'none'; 
    });
    if (hero) hero.style.display = 'none'; 
    container.innerHTML = "";
    createRuinsCard(ruins.filter(ruin => ruin.culture === culture));
    }

    function showAll() {
    otherSections.forEach(section => {
        section.style.display = 'block'; 
    });
    container.innerHTML = ""; 
    createRuinsCard(ruins);
    }

    const mayaLink = document.querySelector("#maya");
    mayaLink.addEventListener("click", () => {
    filterByCulture("Maya");
    });

    const zapotecLink = document.querySelector("#zapotec");
    zapotecLink.addEventListener("click", () => {
    filterByCulture("Zapotec");
    });

    const teotihuacanoLink = document.querySelector("#teotihuacano");
    teotihuacanoLink.addEventListener("click", () => {
        filterByCulture("Teotihuacano");
    })

    function getCardsToShow() {
    const width = window.innerWidth;

    if (width < 767) {
        return 4;  
    } else {
        return ruins.length;  
    }
    }

    function createRuinsCard(ruins){
        const cardsToShow = getCardsToShow();
        container.innerHTML = "";
        ruins.slice(0, cardsToShow).forEach(ruin => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML = `
            
            <div class="card-content">
            <h2>${ruin.name}</h2>
            <p><strong>Culture:</strong> ${ruin.culture}</p>
            <p><strong>Period:</strong> ${ruin.period}</p>
            <p><strong>Location:</strong> ${ruin.location}</p>
            <p><strong>Use:</strong> ${ruin.use}</p>
            </div>
            <img 
            src="${ruin.image}" 
                alt="${ruin.name} Ruins" 
                loading="lazy"
                >
                `;
                
                container.appendChild(card);
        });
    }

    createRuinsCard(ruins);

    window.addEventListener('resize', () => {
    createRuinsCard(ruins);
});
}

if (window.location.pathname.endsWith('/ruins_review.html')) {
  const counterElement = document.getElementById("reviewCounter");

  if (counterElement) {
    let reviewCount = localStorage.getItem("reviewCount");

    if (reviewCount === null) {
      reviewCount = 0;
    } else {
      reviewCount = parseInt(reviewCount);
    }

    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    counterElement.textContent = reviewCount;
    console.log("Review count updated:", reviewCount);
  }
}