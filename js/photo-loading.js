import { FILE_TYPES } from './data.js';

const avatarOpenInput = document.querySelector('.ad-form-header__input');
const fileAvatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarElement = document.querySelector('.ad-form-header__preview img');

const filePhotoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoElement = document.querySelector('.ad-form__photo');


const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  const fileType = fileName.split('.').pop();
  return FILE_TYPES.includes(fileType);
};

const onAvatarInputChange = () => {
  const file = avatarOpenInput.files[0];

  if (file && isValidType(file)) {
    const url = URL.createObjectURL(file);
    avatarElement.src = url;
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
};

const resetPhoto = () => {
  photoElement.innerHTML = '';
};

const resetPictures = () => {
  resetAvatar();
  resetPhoto();
};

export { choosenAvatar, choosenPhoto, resetPictures };
