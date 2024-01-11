import { createActiveForm, createInactiveForm } from './form-inactive-active.js';
import { initForm } from './form.js';
import { getData } from './get-send-data.js';
import { loadingMap} from './map.js';

const createMap = () => {
  initForm();
  createActiveForm();
  getData();
};

createInactiveForm();
createMap(loadingMap());


