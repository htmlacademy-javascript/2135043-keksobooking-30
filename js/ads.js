import { SIMILAR_ADS_COUNT, MIN_LAT_NUMBER_COUNT, MAX_LAT_NUMBER_COUNT, MIN_LNG_NUMBER_COUNT, MAX_LNG_NUMBER_COUNT, TITLES, TYPE_HOUSING, CHECKOUT_TIME, FEATURES, DESCRIPTIONS, PHOTOS } from './data.js';
import { getRandomInteger, getRandomArrayElement, createArrayWithRandomUniqElements } from './util.js';

let currentAvatarId = 1;

const createAvatarAutor = () => {
  const avatarIdLength = 2;
  const randomAvatar = `img/avatars/user${`${currentAvatarId++}`.padStart(avatarIdLength, '0')}.png`;
  return randomAvatar;
};

const createRandomOffer = (latLocation, lngLocation) => ({
  title: getRandomArrayElement(TITLES),
  address: `${latLocation}, ${lngLocation}`,
  price: getRandomInteger(),
  type: getRandomArrayElement(TYPE_HOUSING),
  rooms: getRandomInteger(),
  guests: getRandomInteger(),
  checkin: getRandomArrayElement(CHECKOUT_TIME),
  checkout: getRandomArrayElement(CHECKOUT_TIME),
  features: createArrayWithRandomUniqElements(FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: createArrayWithRandomUniqElements(PHOTOS),
});

const createRandomLocation = (latLocation, lngLocation) => ({
  lat: latLocation,
  lng: lngLocation,
});

const createSimilarAds = () => {
  const latCount = Number(`35.${getRandomInteger(MIN_LAT_NUMBER_COUNT, MAX_LAT_NUMBER_COUNT)}`);
  const lngCount = Number(`139.${getRandomInteger(MIN_LNG_NUMBER_COUNT, MAX_LNG_NUMBER_COUNT)}`);

  return ({
    author: { avatar: createAvatarAutor() },
    offer: createRandomOffer(latCount, lngCount),
    location: createRandomLocation(latCount, lngCount)
  });
};

const createArraySimilarAds = () => Array.from({ length: SIMILAR_ADS_COUNT }, createSimilarAds);

export { createArraySimilarAds };
