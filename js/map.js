import { createActiveForm } from './form-inactive-active.js';
import { ZOOM, defaultCoordinates, pinIconOptions, pinSimilarIconOptions, QUANTITY_NUMBERS } from './data.js';
import { createArraySimilarAds } from './ads.js';
import { createSimilarAds } from './get-similar-ads.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const addressForm = document.querySelector('#address');

const loadingMap = L.map('map-canvas')
  .on('load', () => {
    createActiveForm();
  })
  .setView(defaultCoordinates, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(loadingMap);

const mainPinIcon = L.icon({
  iconUrl: pinIconOptions.url,
  iconSize: [pinIconOptions.width, pinIconOptions.height],
  iconAnchor: [pinIconOptions.anchorX, pinIconOptions.anchorY],
});

const mainMarker = L.marker(defaultCoordinates, {
  draggable: true,
  icon: mainPinIcon,
});

const mainPinSimilarIcon = L.icon({
  iconUrl: pinSimilarIconOptions.url,
  iconSize: [pinSimilarIconOptions.width, pinSimilarIconOptions.height],
  iconAnchor: [pinSimilarIconOptions.anchorX, pinSimilarIconOptions.anchorY],
});


mainMarker.on('moveend', (evt) => {
  addressForm.value = `${defaultCoordinates.lat}, ${defaultCoordinates.lng}`;
  const addressCoordinate = evt.target.getLatLng();
  addressForm.value = `${addressCoordinate.lat.toFixed(QUANTITY_NUMBERS)}, ${addressCoordinate.lng.toFixed(QUANTITY_NUMBERS)}`;
});

mainMarker.addTo(loadingMap);

const points = createArraySimilarAds();

points.forEach((point) => {
  const { location: { lat, lng } } = point;
  const similarAdsMarker = L.marker({
    lat,
    lng,
  },
  {
    mainPinSimilarIcon,
  });

  similarAdsMarker.addTo(loadingMap).bindPopup(createSimilarAds(point));
});

const resetMap = (input) => {
  mainMarker.setLatLng(defaultCoordinates);
  loadingMap.setView(defaultCoordinates, ZOOM);
  input.value = `${defaultCoordinates.lat.toFixed(QUANTITY_NUMBERS)}, ${defaultCoordinates.lng.toFixed(QUANTITY_NUMBERS)}`;
};


export { loadingMap, resetMap };
