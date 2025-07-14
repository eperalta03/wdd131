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
