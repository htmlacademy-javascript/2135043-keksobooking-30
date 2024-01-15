import { isEscapeKey } from './util.js';

const errorDataLoadingMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const createDataLoadingErrorMessage = () => {
  const newErrorMessage = errorDataLoadingMessageTemplate.cloneNode(true);
  newErrorMessage.querySelector('.error__message').textContent = 'Ошибка загрузки похожих объявлений';
  newErrorMessage.querySelector('.error__button').textContent = 'Попробовать снова';
  document.body.append(newErrorMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onDocumentClick);
};

const closeModalWindowErrorMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onDocumentClick);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalWindowErrorMessage();
  }
}

function onDocumentClick () {
  closeModalWindowErrorMessage();
}

export { createDataLoadingErrorMessage };
