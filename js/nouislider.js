import { adForm, priceHousingForm, typeHousingForm } from './form.js';
import { MAX_PRICE_HOUSING_COUNT, MIN_PRICE_HOUSING_COUNT, sliderOptions } from './data.js';

const adFormSlider = document.querySelector('.ad-form__slider');

const onSliderUpdate = () => {
  priceHousingForm.value = adFormSlider.noUiSlider.get();
  priceHousingForm.placeholder = priceHousingForm.value;
};

const createSlider = () => {
  noUiSlider.create(adFormSlider, {
    range: {
      min: sliderOptions.min,
      max: MAX_PRICE_HOUSING_COUNT,
    },
    step: sliderOptions.step,
    start: MIN_PRICE_HOUSING_COUNT[typeHousingForm.value],
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

  typeHousingForm.addEventListener('change', () => {
    adFormSlider.noUiSlider.set(MIN_PRICE_HOUSING_COUNT[typeHousingForm.value]);
  });

  adFormSlider.noUiSlider.on('update', onSliderUpdate);
};

const resetSlider = () => adForm.noUiSlider.reset();

export { createSlider, resetSlider };


