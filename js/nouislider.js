import { priceHousingForm, typeHousingForm, validatePrice } from './form.js';
import { MAX_PRICE_HOUSING_COUNT, MIN_PRICE_HOUSING_COUNT, sliderOptions } from './data.js';

const adFormSlider = document.querySelector('.ad-form__slider');


const onSliderUpdate = () => {
  priceHousingForm.value = adFormSlider.noUiSlider.get();
  validatePrice();
};

const createSlider = () => {
  noUiSlider.create(adFormSlider, {
    range: {
      min: sliderOptions.min,
      max: MAX_PRICE_HOUSING_COUNT,
    },
    step: sliderOptions.step,
    start: sliderOptions.min,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  adFormSlider.noUiSlider.on('slide', onSliderUpdate);
};

const onPriceInputChange = () => {
  adFormSlider.noUiSlider.set(priceHousingForm.value);
};

const onTypeInputChange = () => {
  priceHousingForm.placeholder = MIN_PRICE_HOUSING_COUNT[typeHousingForm.value];
};
const changeType = () => typeHousingForm.addEventListener('change', onTypeInputChange);

const changeSlider = () => priceHousingForm.addEventListener('input', onPriceInputChange);

const resetSlider = () => adFormSlider.noUiSlider.reset();

export { createSlider, changeSlider, changeType, resetSlider };
