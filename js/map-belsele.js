// Initialize the map
let map = L.map('map-belsele').setView([51.1700, 4.1375], 16); // Coordinates for the Church of Belsele and zoom level 16

// Add a dark tile layer (CartoDB Dark Matter in this case)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19, // Maximum zoom level
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a custom icon for the marker
let spIcon = L.icon({
    iconUrl: 'assets/images/SP-Logo.svg',  // Path to your custom SP logo (SVG)
    iconSize: [32, 32],       // Size of the icon (adjust as needed)
    iconAnchor: [16, 32],     // Point of the icon that will correspond to the marker's location
    popupAnchor: [0, -32]     // Popup will appear above the icon
});

// Place a marker with the custom SP logo at the location of the Church of Belsele
let apMarker = L.marker([51.1700, 4.1375], { icon: spIcon }).addTo(map);

// Add a popup to the marker
apMarker.bindPopup("<b>Church of Belsele</b><br>Location in Sint-Niklaas, Belgium").openPopup();
