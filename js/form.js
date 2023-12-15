import { TITLE_LENGTH, MAX_PRICE_HOUSING_COUNT, MIN_PRICE_HOUSING_COUNT, ROOMS_GUESTS_OPTIONS, ERROR_TITLE_MESSAGE, ERROR_PRICE_MESSAGE, ERROR_GUESTS_MESSAGE } from './data.js';

const adForm = document.querySelector('.ad-form');
const titleForm = adForm.querySelector('#title');
const typeHousingForm = adForm.querySelector('#type');
const priceHousingForm = adForm.querySelector('#price');
const checkinForm = adForm.querySelector('#timein');
const checkoutForm = adForm.querySelector('#timeout');
const roomsCountForm = adForm.querySelector('#room_number');
const guestsCountForm = adForm.querySelector('#capacity');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
}, false);

const isValidLengthTitle = (value) => value.length >= TITLE_LENGTH.min && value.length <= TITLE_LENGTH.max;

const isValidPriceCount = (value) => Number(value) >= MIN_PRICE_HOUSING_COUNT[typeHousingForm.value] && Number(value) <= MAX_PRICE_HOUSING_COUNT;

const isValidRoomsAndGuests = (value) => ROOMS_GUESTS_OPTIONS[roomsCountForm.value].includes(value);

const getErrorMassages = () => {
  pristine.addValidator(
    titleForm,
    isValidLengthTitle,
    ERROR_TITLE_MESSAGE,
    1,
    true
  );

  pristine.addValidator(
    priceHousingForm,
    isValidPriceCount,
    ERROR_PRICE_MESSAGE,
    1,
    true
  );

  pristine.addValidator(
    guestsCountForm,
    isValidRoomsAndGuests,
    ERROR_GUESTS_MESSAGE,
    1,
    true
  );
};

const validateForm = () => pristine.validate();
const resetPristine = () => pristine.reset();

const onFormTypeChange = () => {
  priceHousingForm.placeholder = MIN_PRICE_HOUSING_COUNT[typeHousingForm.value];
  priceHousingForm.min = MIN_PRICE_HOUSING_COUNT[typeHousingForm.value];
  pristine.validate(priceHousingForm);
};

const onFormGuestsNumberChange = () => {
  pristine.validate(guestsCountForm);
};

const onTimeChange = (first, second) => {
  second.value = first.value;
};

const adFormChange = () => {
  typeHousingForm.addEventListener('change', onFormTypeChange);
  roomsCountForm.addEventListener('change', onFormGuestsNumberChange);
  guestsCountForm.addEventListener('change', onFormGuestsNumberChange);
  checkinForm.addEventListener('change', () => onTimeChange(checkinForm, checkoutForm));
  checkoutForm.addEventListener('change', () => onTimeChange(checkoutForm, checkinForm));
};

const onFormSubmit = (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
};

const onResetForm = () => {
  adForm.reset();
  resetPristine();
};

const sendForm = () => {
  adForm.addEventListener('submit', onFormSubmit);
  adFormChange();
  getErrorMassages();
  adForm.reset();
  resetPristine();
};

const resetForm = () => adForm.addEventListener('reset', onResetForm);

export { adForm, sendForm, resetForm, priceHousingForm, onFormTypeChange };

