import { ZOOM, defaultCoordinates, pinIconOptions, pinSimilarIconOptions, QUANTITY_NUMBERS } from './data.js';
import { createSimilarAds } from './get-similar-ads.js';
import { addressForm } from './form.js';
import { TITLE_LAYER, COPYRIGHT } from './data.js';

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

const createPinSimilarIcon = () => L.icon({
  iconUrl: pinSimilarIconOptions.url,
  iconSize: [pinSimilarIconOptions.width, pinSimilarIconOptions.height],
  iconAnchor: [pinSimilarIconOptions.anchorX, pinSimilarIconOptions.anchorY],
});

const similarMarkerGroup = L.layerGroup().addTo(map);

const createSimilarMarkerPoints = (point) => L.marker(point.location, {
  icon: createPinSimilarIcon(),
}).addTo(similarMarkerGroup).bindPopup(createSimilarAds(point));

const getSimilarMarkers = (points) => {
  points.forEach((point) => createSimilarMarkerPoints(point));
};

const renderCoordinateMarker = (input) => {
  input.value = `${defaultCoordinates.lat.toFixed(QUANTITY_NUMBERS)}, ${defaultCoordinates.lng.toFixed(QUANTITY_NUMBERS)}`;
  mainMarker.on('moveend', (evt) => onMainMarkerMoveend(evt, input));
};

function onMainMarkerMoveend(evt, input) {
  const currentCoordinates = evt.target.getLatLng();
  input.value = `${currentCoordinates.lat.toFixed(QUANTITY_NUMBERS)}, ${currentCoordinates.lng.toFixed(QUANTITY_NUMBERS)}`;
}

const loadingMap = () => {
  map.on('load', (createElements) => createElements).setView(defaultCoordinates, ZOOM);

  L.tileLayer(TITLE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);
};

const resetMap = () => {
  map.closePopup();
  mainMarker.setLatLng(defaultCoordinates);
  map.setView(defaultCoordinates, ZOOM);
  addressForm.value = `${ defaultCoordinates.lat.toFixed(QUANTITY_NUMBERS) }, ${ defaultCoordinates.lng.toFixed(QUANTITY_NUMBERS) }`;
};

export { loadingMap, resetMap, getSimilarMarkers, renderCoordinateMarker };
