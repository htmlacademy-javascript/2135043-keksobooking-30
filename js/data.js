const SIMILAR_ADS_COUNT = 10;
const QUANTITY_NUMBERS = 5;
const MIN_LAT_NUMBER_COUNT = 65000;
const MAX_LAT_NUMBER_COUNT = 70000;
const MIN_LNG_NUMBER_COUNT = 70000;
const MAX_LNG_NUMBER_COUNT = 80000;
const ZOOM = 10;

const TITLES = [
  'Самое заманчивое предложение',
  'Выгодное предложение',
  'Больше, чем просто предложение',
  'Это предложение не оставит вас равнодушным',
  'Не проходите мимо!',
  'Загляните и вы будете приятно удивлены',
  'Предложение месяца',
  'Не предложение, а сказка!',
  'Интересное предложение',
  'Красота и наслаждение',
];

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

const DESCRIPTIONS = [
  'Просторное помещение. Подойдет для большой компании.',
  'Я бы отметила новый год именно здесь!',
  'Шикарный вид из окна!',
  'Новое, только что обустроенное пространство.',
  'Немного потрепанное, но очень уютное помещение.',
  'Вам обязательно понравится здесь.',
  'Очень интересное и необычное пространство.',
  'Отсутствие соседей воодушевляет!',
  'Хорошее пространство только для двоих.',
  'Вы проведете здесь незабываемое время!',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
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
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const ROOMS_GUESTS_OPTIONS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const sliderOptions = {
  min: 0,
  max: 100000,
  start: 1000,
  step: 1000,
};

const cityCenter = {
  lat: 35.652832,
  lng: 139.839478,
};

const ERROR_TITLE_MESSAGE = 'Cтрока должна содержать от 30 до 100 символов';
const ERROR_PRICE_MESSAGE = 'Указана некорректная цена';
const ERROR_GUESTS_MESSAGE = 'Указано некорректное колличество мест';

export { SIMILAR_ADS_COUNT, QUANTITY_NUMBERS, MIN_LAT_NUMBER_COUNT, MAX_LAT_NUMBER_COUNT, MIN_LNG_NUMBER_COUNT, MAX_LNG_NUMBER_COUNT, TITLES, TYPE_HOUSING, CHECKOUT_TIME, FEATURES, DESCRIPTIONS, PHOTOS, TYPES };
export { TITLE_LENGTH, MAX_PRICE_HOUSING_COUNT, MIN_PRICE_HOUSING_COUNT, ROOMS_GUESTS_OPTIONS, ERROR_TITLE_MESSAGE, ERROR_PRICE_MESSAGE, ERROR_GUESTS_MESSAGE, sliderOptions, ZOOM, cityCenter };
