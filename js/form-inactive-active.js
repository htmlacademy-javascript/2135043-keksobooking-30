const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('.ad-form__element');
const filtersForm = document.querySelector('.map__filters');
const selectFiltersForm = filtersForm.querySelectorAll('.map__filters select');
const fieldsetFiltersForm = filtersForm.querySelector('.map__filters fieldset');

const createInactiveForm = () => {
  form.classList.add('ad-form--disabled');
  filtersForm.classList.add('map__filters--disabled');
  formFieldset.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  selectFiltersForm.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  fieldsetFiltersForm.disabled = true;
};

const createActiveForm = () => {
  form.classList.remove('ad-form--disabled');
  filtersForm.classList.remove('map__filters--disabled');
  formFieldset.forEach((element) => {
    element.removeAttribute('disabled');
  });
  selectFiltersForm.forEach((element) => {
    element.removeAttribute('disabled');
  });
  fieldsetFiltersForm.disabled = false;
};

export { createInactiveForm, createActiveForm };
