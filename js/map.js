import { ZOOM, defaultCoordinates, pinIconOptions, pinSimilarIconOptions, QUANTITY_NUMBERS, SERVER_URL, TITLE_LAYER, COPYRIGHT } from './data.js';
import { createSimilarAds } from './get-similar-ads.js';
import { addressForm, initForm } from './form.js';
import { filtersForm, filterSimilarMarkers } from './filter-sort.js';
import { debounce } from './util.js';
import { createActiveForm, createActiveMapFilters } from './form-inactive-active.js';
import { getData } from './get-send-data.js';
import { createDataLoadingErrorMessage } from './data-loading-error-message.js';


const map = L.map('map-canvas');

let markersList = Array.from(filtersForm.querySelectorAll('.map__checkbox:checked'), (element) => element.value);
let currentsMarkers;

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
  currentsMarkers = points;
  filterSimilarMarkers(currentsMarkers, markersList).forEach((point) => createSimilarMarkerPoints(point));
  createActiveMapFilters();
};

const filtersChange = () => {
  similarMarkerGroup.clearLayers();
  markersList = Array.from(filtersForm.querySelectorAll('.map__checkbox:checked'), (element) => element.value);
  filterSimilarMarkers(currentsMarkers, markersList).forEach((data) => createSimilarMarkerPoints(data));
};

const onFilterChange = debounce(() => filtersChange());

const initSimilarAdsMarkers = () => getData(SERVER_URL, getSimilarMarkers, createDataLoadingErrorMessage);

const renderCoordinateMarker = (input) => {
  input.value = `${ defaultCoordinates.lat.toFixed(QUANTITY_NUMBERS) }, ${ defaultCoordinates.lng.toFixed(QUANTITY_NUMBERS) }`;
  mainMarker.on('moveend', (evt) => onMainMarkerMoveend(evt, input));
};

function onMainMarkerMoveend (evt, input) {
  const currentCoordinates = evt.target.getLatLng();
  input.value = `${ currentCoordinates.lat.toFixed(QUANTITY_NUMBERS) }, ${ currentCoordinates.lng.toFixed(QUANTITY_NUMBERS) }`;
}

const loadingMap = () => {
  map.on('load', () => {
    initForm();
    createActiveForm();
    initSimilarAdsMarkers();
    filtersForm.addEventListener('change', onFilterChange);
  }).setView(defaultCoordinates, ZOOM);

  L.tileLayer(TITLE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);
};

const resetMap = () => {
  map.closePopup();
  mainMarker.setLatLng(defaultCoordinates);
  map.setView(defaultCoordinates, ZOOM);
  addressForm.value = `${ defaultCoordinates.lat.toFixed(QUANTITY_NUMBERS) }, ${ defaultCoordinates.lng.toFixed(QUANTITY_NUMBERS) }`;
  filtersForm.reset();
  filtersChange();
};

export { loadingMap, resetMap, getSimilarMarkers, renderCoordinateMarker };
