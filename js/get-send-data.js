import { loadData, sendFormData } from './api.js';
import { createActiveMapFilters, createInactiveMapFilters } from './form-inactive-active';
import { createDataLoadingErrorMessage } from './data-loading-error-message.js';
import { getDisabledButton } from './form';
import { resetForm } from './form';
import { getSimilarMarkers } from './map.js';
import { showFormSuccessMessage, showFormErrorMessage } from './form-messages.js';

const getData = async () => {
  try {
    const points = await loadData();
    getSimilarMarkers(points);
    createActiveMapFilters();
  } catch {
    createDataLoadingErrorMessage();
    createInactiveMapFilters();
  }
};

const sendForm = async (formElement) => {
  try {
    getDisabledButton(true);
    await sendFormData(new FormData(formElement));
    resetForm();
    showFormSuccessMessage();
  } catch {
    showFormErrorMessage();
  } finally {
    getDisabledButton(false);
  }
};

export { getData, sendForm };
