import { QUANTITY_NUMBERS } from './data.js';

const getRandomInteger = (a = 0, b = 100) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomLocation = (elements) => (Math.random() * (elements.max - elements.min) + elements.min).toFixed(QUANTITY_NUMBERS);

const createArrayWithRandomUniqElements = (elements) => {
  const objects = new Set(Array.from({ length: getRandomInteger(0, elements.length) }, () => getRandomArrayElement(elements)));
  return Array.from(objects);
};

export { getRandomInteger, getRandomArrayElement, getRandomLocation, createArrayWithRandomUniqElements };
