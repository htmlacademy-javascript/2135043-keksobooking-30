import { UPDATING_LABELS_TIMEOUT } from './data.js';

const isEscapeKey = (evt) => evt.key === 'Escape';


const debounce = (callback, timeoutDelay = UPDATING_LABELS_TIMEOUT) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, debounce };
