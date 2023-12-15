import './get-similar-ads.js';
import { renderingSimilarAds } from './get-similar-ads.js';
import { createInactiveForm, createActiveForm } from './form-inactive-active.js';
import { sendForm, resetForm } from './form.js';
import { createSlider } from './nouislider.js';

renderingSimilarAds();
createInactiveForm();
createActiveForm();
sendForm();
resetForm();
createSlider();
