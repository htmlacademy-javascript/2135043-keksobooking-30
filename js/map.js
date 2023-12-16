//import { createActiveForm, createInactiveForm } from './form-inactive-active.js';
import { ZOOM, cityCenter } from './data.js';
//import { adForm } from './form.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const addressForm = adForm.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView(cityCenter, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const marker = L.marker(cityCenter, {
  draggable: true,
  icon: mainPinIcon,
});

marker.on('moveend', (evt) => {
  evt.target.getLatLng();
});

marker.addTo(map);
