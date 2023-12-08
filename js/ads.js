import { SIMILAR_ADS_COUNT, TITLES, TYPE_HOUSING, CHECKOUT_TIME, FEATURES, DESCRIPTIONS, PHOTOS } from './data.js';
import { getRandomInteger, getRandomArrayElement, createUniqArray } from './util.js';

let currentAvatarId = 1;

const createAvatarAutor = () => {
  const randomAvatar = `img/avatars/user${`${currentAvatarId++}`.padStart(2, '0')}.png`;
  return randomAvatar;
};

const createRandomLocation = () => ({
  lat: Number(`35.${getRandomInteger(65000, 70000)}`),
  lng: Number(`139.${getRandomInteger(70000, 80000)}`),
});

const createRandomOffer = () => ({
  title: getRandomArrayElement(TITLES),
  address: createRandomLocation(),
  price: getRandomInteger(),
  type: getRandomArrayElement(TYPE_HOUSING),
  rooms: getRandomInteger(),
  guests: getRandomInteger(),
  checkin: getRandomArrayElement(CHECKOUT_TIME),
  checkout: getRandomArrayElement(CHECKOUT_TIME),
  features: createUniqArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: createUniqArray(PHOTOS),
});

const createSimilarAds = () => ({
  author: createAvatarAutor(),
  offer: createRandomOffer(),
  location: createRandomLocation(),
});

const createArraySimilarAds = () => Array.from({ length: SIMILAR_ADS_COUNT }, createSimilarAds);

export { createArraySimilarAds };
