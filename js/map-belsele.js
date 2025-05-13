// Initialiseer de kaart
let map = L.map('map-belsele').setView([51.1700, 4.1375], 16); // Coördinaten voor de Kerk van Belsele en zoomniveau 16

// Voeg een donkere tegel-laag toe (CartoDB Dark Matter in dit geval)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19, // Maximale zoomniveau
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> bijdragers'
}).addTo(map);

// Maak een aangepast icoon voor de marker
let spIcon = L.icon({
    iconUrl: 'assets/images/SP-Logo.svg',  // Pad naar je aangepast SP-logo (SVG)
    iconSize: [32, 32],       // Grootte van het icoon (pas aan indien nodig)
    iconAnchor: [16, 32],     // Punt van het icoon dat overeenkomt met de locatie van de marker
    popupAnchor: [0, -32]     // De popup verschijnt boven het icoon
});

// Plaats een marker met het aangepaste SP-logo op de locatie van de Kerk van Belsele
let apMarker = L.marker([51.1700, 4.1375], { icon: spIcon }).addTo(map);

// Voeg een popup toe aan de marker
apMarker.bindPopup("<b>Kerk van Belsele</b><br>Locatie in Sint-Niklaas, België").openPopup();
