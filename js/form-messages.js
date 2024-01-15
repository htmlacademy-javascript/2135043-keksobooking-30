import { isEscapeKey } from './util.js';

const successFormMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorFormMessageElement = document.querySelector('#error').content.querySelector('.error');

const showMessage = (element) => {
  document.body.append(element);
  document.addEventListener('keydown', onDocumentKeydown);
  element.addEventListener('click', onCloseDocumentClick);
};

const showFormSuccessMessage = () => {
  const newSuccessMessage = successFormMessageElement.cloneNode(true);
  showMessage(newSuccessMessage);
};

const showFormErrorMessage = () => {
  const newErrorMessage = errorFormMessageElement.cloneNode(true);
  const errorButton = newErrorMessage.querySelector('.error__button');
  showMessage(newErrorMessage);
  errorButton.addEventListener('click', onCloseDocumentClick);
};

const closeFormMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onCloseDocumentClick);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormMessage();
  }
}

function onCloseDocumentClick () {
  closeFormMessage();
}

export { showFormSuccessMessage, showFormErrorMessage };
