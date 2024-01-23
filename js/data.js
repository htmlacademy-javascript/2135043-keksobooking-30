const MIN_ADS_COUNT = 0;
const SIMILAR_ADS_COUNT = 10;
const QUANTITY_NUMBERS = 5;
const ZOOM = 10;
const UPDATING_LABELS_TIMEOUT = 500;

const TYPE_HOUSING = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const TYPES = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const TITLE_LENGTH = {
  min: 30,
  max: 100
};

const MAX_PRICE_HOUSING_COUNT = 100000;

const MIN_PRICE_HOUSING_COUNT = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

const ROOMS_GUESTS_OPTIONS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const sliderOptions = {
  min: 0,
  start: 1000,
  step: 1,
};

const defaultCoordinates = {
  lat: 35.68306,
  lng: 139.75436,
};

const pinIconOptions = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};

const ERROR_TITLE_MESSAGE = 'Cтрока должна содержать от 30 до 100 символов';
const ERROR_PRICE_MESSAGE = 'Указана некорректная цена';
const ERROR_GUESTS_MESSAGE = 'Указано некорректное колличество мест';
const ERROR_PICTURE_MESSAGE = 'Некорректный формат изображения';

const SERVER_URL = 'https://30.javascript.pages.academy/keksobooking';

const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET: 'Не удалось загрузить данные.',
  POST: 'Ошибка отправки формы. Попробуйте ещё раз.',
};

const TITLE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

const DEFAULT_VALUE = 'any';

const PRICE_TYPES = {
  'any': {
    min: 0,
    max: 100000
  },
  'middle': {
    min: 10000,
    max: 50000
  },
  'low': {
    min: 0,
    max: 10000
  },
  'high': {
    min: 50000,
    max: 100000
  }
};

const pinSimilarIconOptions = {
  url: './img/pin.svg',
  width: 40,
  height: 40,
  anchorX: 20,
  anchorY: 40,
};

const imageOptions = {
  alt: 'Фотграфия жилья',
  width: 70,
  height: 70,
};

export { SIMILAR_ADS_COUNT, QUANTITY_NUMBERS, TYPE_HOUSING, CHECKOUT_TIME, FEATURES, TYPES };
export { TITLE_LENGTH, MAX_PRICE_HOUSING_COUNT, MIN_PRICE_HOUSING_COUNT, ROOMS_GUESTS_OPTIONS, ERROR_TITLE_MESSAGE, ERROR_PRICE_MESSAGE, ERROR_GUESTS_MESSAGE, ERROR_PICTURE_MESSAGE,sliderOptions };
export { ZOOM, defaultCoordinates, pinIconOptions, pinSimilarIconOptions };
export { SERVER_URL, ServerRoute, HttpMethod, ErrorText, TITLE_LAYER, COPYRIGHT, FILE_TYPES, UPDATING_LABELS_TIMEOUT, DEFAULT_VALUE, PRICE_TYPES, MIN_ADS_COUNT, imageOptions };
