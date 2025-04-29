// Initialize the map
let map = L.map('map-belsele').setView([51.1700, 4.1375], 16); // Coordinates for the Church of Belsele and zoom level 16

// Add a dark tile layer (CartoDB Dark Matter in this case)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19, // Maximum zoom level
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Place a marker on the location of the Church of Belsele
let apMarker = L.marker([51.1700, 4.1375]).addTo(map);

// Add a popup to the marker
apMarker.bindPopup("<b>Church of Belsele</b><br>Location in Sint-Niklaas, Belgium").openPopup();
