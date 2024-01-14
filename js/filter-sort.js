import { DEFAULT_VALUE, MIN_ADS_COUNT, PRICE_TYPES, SIMILAR_ADS_COUNT } from './data.js';

const filtersForm = document.querySelector('.map__filters');
const typeSelect = filtersForm.querySelector('#housing-type');
const priceSelect = filtersForm.querySelector('#housing-price');
const roomsSelect = filtersForm.querySelector('#housing-rooms');
const guestsSelect = filtersForm.querySelector('#housing-guests');

const filterSimilarMarkers = (points, markersList) => points
  .filter(({ offer }) => (typeSelect.value === DEFAULT_VALUE || offer.type === typeSelect.value))
  .filter(({ offer }) => (offer.price >= PRICE_TYPES[priceSelect.value].min && offer.price <= PRICE_TYPES[priceSelect.value].max))
  .filter(({ offer }) => (roomsSelect.value === DEFAULT_VALUE || offer.rooms === Number(roomsSelect.value)))
  .filter(({ offer }) => (guestsSelect.value === DEFAULT_VALUE || offer.guests === Number(guestsSelect.value)))
  .filter(({ offer }) => (
    markersList.length === 0 || (offer.markers && markersList.every(
      (marker) => offer.markers.includes(marker))
    ))
  )
  .slice(MIN_ADS_COUNT, SIMILAR_ADS_COUNT);


export { filtersForm, filterSimilarMarkers };
