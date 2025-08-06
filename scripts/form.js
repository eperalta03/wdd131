const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedEl = document.getElementById('lastModified');
lastModifiedEl.textContent = `Last modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    
  const selectElement = document.getElementById("productSelect");

  if (selectElement) {
    const products = [
      { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
      { id: "fc-2050", name: "power laces", averagerating: 4.7 },
      { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
      { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
      { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }

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
});

