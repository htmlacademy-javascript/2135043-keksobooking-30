import { adForm } from './form.js';
import { changeSlider, changeType, createSlider } from './nouislider.js';

const formFieldset = document.querySelectorAll('.ad-form__element');
const filtersForm = document.querySelector('.map__filters');
const selectFiltersForm = filtersForm.querySelectorAll('.map__filters select');
const fieldsetFiltersForm = filtersForm.querySelector('.map__filters fieldset');

const createInactiveForm = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldset.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  fieldsetFiltersForm.disabled = true;
};

const createInactiveMapFilters = () => {
  filtersForm.classList.add('map__filters--disabled');
  selectFiltersForm.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const createActiveForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldset.forEach((element) => {
    element.removeAttribute('disabled');
  });

  fieldsetFiltersForm.disabled = false;
  createSlider();
  changeSlider();
  changeType();
};

const createActiveMapFilters = () => {
  filtersForm.classList.remove('map__filters--disabled');
  selectFiltersForm.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

export { createInactiveForm, createInactiveMapFilters, createActiveForm, createActiveMapFilters };
