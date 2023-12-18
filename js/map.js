import { createActiveForm } from './form-inactive-active.js';
import { ZOOM, cityCenter, pinIconOptions, QUANTITY_NUMBERS } from './data.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const addressForm = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    createActiveForm();
  })
  .setView(cityCenter, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: pinIconOptions.url,
  iconSize: [pinIconOptions.width, pinIconOptions.height],
  iconAnchor: [pinIconOptions.anchorX, pinIconOptions.anchorY],
});

const marker = L.marker(cityCenter, {
  draggable: true,
  icon: mainPinIcon,
});

/*const mainPinSimilarIcon = L.icon({
  iconUrl: pinSimilarIconOptions.url,
  iconSize: [pinSimilarIconOptions.width, pinSimilarIconOptions.height],
  iconAnchor: [pinSimilarIconOptions.anchorX, pinSimilarIconOptions.anchorY],
});*/

marker.on('moveend', (evt) => {
  addressForm.value = `${cityCenter.lat}, ${cityCenter.lng}`;
  const addressCoordinate = evt.target.getLatLng();
  addressForm.value = `${addressCoordinate.lat.toFixed(QUANTITY_NUMBERS)}, ${addressCoordinate.lng.toFixed(QUANTITY_NUMBERS)}`;
});

marker.addTo(map);

