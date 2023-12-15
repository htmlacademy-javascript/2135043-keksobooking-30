import { adForm, priceHousingForm } from './form.js';
import { MAX_PRICE_HOUSING_COUNT } from './data.js';
const adFormSlider = adForm.querySelector('.ad-form__slider');

const onSliderUpdate = () => {
  priceHousingForm.value = adFormSlider.noUiSlider.get();
  priceHousingForm.placeholder = priceHousingForm.value;
};

const createSlider = () => {
  noUiSlider.create(adFormSlider, {
    range: {
      min: 0,
      max: MAX_PRICE_HOUSING_COUNT,
    },
    step: 1000,
    start: 0,
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

  adFormSlider.noUiSlider.on('update', onSliderUpdate);
};


export { createSlider };
