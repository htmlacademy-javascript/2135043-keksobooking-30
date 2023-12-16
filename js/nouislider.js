import { adForm, priceHousingForm, typeHousingForm } from './form.js';
import { MAX_PRICE_HOUSING_COUNT, MIN_PRICE_HOUSING_COUNT } from './data.js';

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
    start: 1000,
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
    const selected = MIN_PRICE_HOUSING_COUNT[typeHousingForm.value];
    adFormSlider.noUiSlider.set(selected);
  });

  adFormSlider.noUiSlider.on('update', onSliderUpdate);
};

export { createSlider };


