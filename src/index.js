import Data from './data.js'

import L from 'leaflet'

const map = L.map('map').setView([46.5311, 6.6301], 13)

var osmCH = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// my variable data
const fastFoods = L.geoJson(Data)

osmCH.addTo(map)

// add my data on the map
fastFoods.addTo(map)