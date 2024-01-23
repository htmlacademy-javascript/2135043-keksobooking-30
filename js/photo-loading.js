import { FILE_TYPES, ERROR_PICTURE_MESSAGE, imageOptions } from './data.js';

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

const validateImage = () => !document.querySelector(`.${ERROR_PICTURE_MESSAGE_CLASS}`);

const resetAvatar = () => {
  if (document.querySelector(`.${ERROR_PICTURE_MESSAGE_CLASS}`)) {
    avatarContainer.removeChild(avatarContainer.lastChild);
  }
};

const resetPhoto = () => {
  if (document.querySelector(`.${ERROR_PICTURE_MESSAGE_CLASS}`)) {
    photoContainer.removeChild(photoContainer.lastChild);
  }
};


const createErrorAvatarMessage = () => {
  const container = document.createElement('div');
  container.classList.add(`${ERROR_PICTURE_MESSAGE_CLASS}`);
  container.textContent = ERROR_PICTURE_MESSAGE;
  avatarContainer.append(container);
};

const createErrorPhotoMessage = () => {
  const container = document.createElement('div');
  container.classList.add(`${ERROR_PICTURE_MESSAGE_CLASS}`);
  container.textContent = ERROR_PICTURE_MESSAGE;
  photoContainer.append(container);
};

const onAvatarInputChange = () => {
  const file = avatarOpenInput.files[0];

  if (file && isValidType(file)) {
    const url = URL.createObjectURL(file);
    avatarElement.src = url;
    resetAvatar();
  }

  if (file && !isValidType(file)) {
    avatarContainer.classList.add('ad-form-header--invalid');
    createErrorAvatarMessage();
    avatarElement.src = 'img/muffin-grey.svg';
  }
};

const choosenAvatar = () => {
  fileAvatarChooser.addEventListener('change', onAvatarInputChange);
};

const createImage = (file) => {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  img.alt = imageOptions.alt;
  img.width = imageOptions.width;
  img.height = imageOptions.height;
  photoElement.append(img);
};

const photoInputUpload = (evt) => {
  const file = evt.target.files[0];

  if (file && isValidType(file)) {
    createImage(file);
    resetPhoto();
  }

  if (file && !isValidType(file)) {
    photoContainer.classList.add('ad-form-header--invalid');
    createErrorPhotoMessage();
    photoElement.innerHTML = ' ';
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

const resetPictures = () => {
  avatarElement.src = 'img/muffin-grey.svg';
  photoElement.innerHTML = ' ';
  resetAvatar();
  resetPhoto();
};

export { choosenAvatar, choosenPhoto, resetPictures, validateImage };
