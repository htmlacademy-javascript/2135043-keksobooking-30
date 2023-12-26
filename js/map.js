import { createActiveForm, createInactiveForm } from './form-inactive-active.js';
import { ZOOM, defaultCoordinates, pinIconOptions, pinSimilarIconOptions, QUANTITY_NUMBERS } from './data.js';
import { createArraySimilarAds } from './ads.js';
import { createSimilarAds } from './get-similar-ads.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const addressForm = document.querySelector('#address');

createInactiveForm();

const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: pinIconOptions.url,
  iconSize: [pinIconOptions.width, pinIconOptions.height],
  iconAnchor: [pinIconOptions.anchorX, pinIconOptions.anchorY],
});

const mainMarker = L.marker(defaultCoordinates, {
  draggable: true,
  icon: mainPinIcon,
}).addTo(map);

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

mainMarker.addTo(map);

const points = createArraySimilarAds();

const similarMarkerGroup = L.layerGroup().addTo(map);

const createSimilarMarkerPoints = (point) => {
  const { location: { lat, lng } } = point;
  const similarAdsMarker = L.marker({
    lat,
    lng,
  },
  {
    icon: mainPinSimilarIcon,
  });

  similarAdsMarker.addTo(similarMarkerGroup).bindPopup(createSimilarAds(point));
};

const getSimilarMarkers = () => {
  points.forEach((point) => {
    createSimilarMarkerPoints(point);
  });
};

//similarMarkerGroup.clearLayers();

const loadingMap = () => {
  map.on('load', () => {
    createActiveForm();
    getSimilarMarkers();
  }).setView(defaultCoordinates, ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);
};

const resetMap = () => {
  map.closePopup();
  mainMarker.setLatLng(defaultCoordinates);
  map.setView(defaultCoordinates, ZOOM);
  addressForm.value = `${ defaultCoordinates.lat.toFixed(QUANTITY_NUMBERS) }, ${ defaultCoordinates.lng.toFixed(QUANTITY_NUMBERS) }`;
};

export { loadingMap, resetMap };
