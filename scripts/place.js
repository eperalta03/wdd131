const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedEl = document.getElementById('lastModified');
lastModifiedEl.textContent = `Last modified: ${document.lastModified}`;

const temperature = 35; 
const windSpeed = 10;   

function calculateWindChill(tempF, speed) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16)
  ).toFixed(1); 
}

const windChillSpan = document.getElementById("windchill");

if (temperature <= 50 && windSpeed > 3) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillSpan.textContent = `${chill} °F`;
} else {
  windChillSpan.textContent = "N/A";
}
