import { FILE_TYPES, ERROR_PICTURE_MESSAGE } from './data.js';

const avatarOpenInput = document.querySelector('.ad-form-header__input');
const fileAvatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarElement = document.querySelector('.ad-form-header__preview img');
const avatarContainer = document.querySelector('.ad-form-header');
const filePhotoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoElement = document.querySelector('.ad-form__photo');
const photoContainer = document.querySelector('.ad-form__photo-container');

const ERROR_PICTURE_MESSAGE_CLASS = 'ad-form__photo--invalid';

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  const fileType = fileName.split('.').pop();
  return FILE_TYPES.includes(fileType);
};

const validateImage = () => !document.querySelector(`.${ ERROR_PICTURE_MESSAGE_CLASS }`);

const createErrorAvatarMessage = () => {
  const container = document.createElement('div');
  container.classList.add(`${ERROR_PICTURE_MESSAGE_CLASS}`);
  container.textContent = ERROR_PICTURE_MESSAGE;
  avatarContainer.append(container);
};

const removeErrorAvatarMessage = () => {
  avatarContainer.removeChild(avatarContainer.lastChild);
};

const createErrorPhotoMessage = () => {
  const container = document.createElement('div');
  container.classList.add(`${ ERROR_PICTURE_MESSAGE_CLASS }`);
  container.textContent = ERROR_PICTURE_MESSAGE;
  photoContainer.append(container);
};

const removeErrorPhotoMessage = () => {
  photoContainer.removeChild(photoContainer.lastChild);
};

const onAvatarInputChange = () => {
  const file = avatarOpenInput.files[0];

  if (file && isValidType(file)) {
    const url = URL.createObjectURL(file);
    avatarElement.src = url;
    removeErrorAvatarMessage();
  }

  if (file && !isValidType(file)) {
    createErrorAvatarMessage();
  }
};

const choosenAvatar = () => {
  fileAvatarChooser.addEventListener('change', onAvatarInputChange);
};

const createImage = (file) => {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  img.alt = 'Фотграфия жилья';
  img.width = '70';
  img.height = '70';
  photoElement.append(img);
};

const photoInputUpload = (evt) => {
  const file = evt.target.files[0];

  if (file && isValidType(file)) {
    createImage(file);
    removeErrorPhotoMessage();
  }

  if (file && !isValidType(file)) {
    createErrorPhotoMessage();
  }
};

const onPhotoInputChange = (evt) => {
  if (evt.target.matches('#images')) {
    photoInputUpload(evt);
  }
};

const choosenPhoto = () => {
  filePhotoChooser.addEventListener('change', onPhotoInputChange);
};

const resetAvatar = () => {
  avatarElement.src = 'img/muffin-grey.svg';
  removeErrorAvatarMessage();
};

const resetPhoto = () => {
  photoElement.innerHTML = '';
  removeErrorPhotoMessage();
};

const resetPictures = () => {
  resetAvatar();
  resetPhoto();
};

export { choosenAvatar, choosenPhoto, resetPictures, validateImage };
