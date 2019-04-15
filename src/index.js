import Data from './data.js'
import L from 'leaflet'
import * as R from 'ramda'

const map = L.map('map').setView([46.5311, 6.6301], 13)

var osmCH = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// my variable data
//const fastFoods = L.geoJson(Data)

const iconBurger = L.icon({
    iconUrl: 'https://images.ecosia.org/O8DovcoI9fosW4HYZKKf3Y2KP-Q=/0x390/smart/http%3A%2F%2Fpngimg.com%2Fuploads%2Fburger_sandwich%2Fburger_sandwich_PNG4114.png',
    iconSize: [25, 25],
    iconAnchor: [10, 10],
});

// const iconFood = L.icon({
//     iconUrl: 'https://images.ecosia.org/O8DovcoI9fosW4HYZKKf3Y2KP-Q=/0x390/smart/http%3A%2F%2Fpngimg.com%2Fuploads%2Fburger_sandwich%2Fburger_sandwich_PNG4114.png',
//     iconSize: [25, 25],
//     iconAnchor: [10, 10],
// });

//L.marker([50.505, 30.57], { icon: iconFood }).addTo(map);

// Data.features
// 	.filter(feature => R.pathEq(['geometry', 'type'], 'Polygon', feature))
// 	.map(feature => {
// 	const [lat, lon] = R.path(['geometry', 'coordinates'], feature)
// 	L.marker([lon, lat], { icon: iconBurger }).addTo(map)
// })

Data.features
	.filter(feature => R.pathEq(['geometry', 'type'], 'Point', feature))
	.filter(feature => R.pathEq(['properties', 'amenity'], 'fast_food', feature))
	.map(feature => {
	const [lat, lon] = R.path(['geometry', 'coordinates'], feature)
	L.marker([lon, lat], { icon: iconBurger }).addTo(map)
})

osmCH.addTo(map)

// add my data on the map
//fastFoods.addTo(map)