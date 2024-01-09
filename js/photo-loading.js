import { FILE_TYPES } from './data.js';
const avatarOpenInput = document.querySelector('.ad-form-header__input');
const fileAvatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarElement = document.querySelector('.ad-form-header__preview img');

const photoOpenInput = document.querySelector('.ad-form__input');
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

const createImage = () => {
  const img = document.createElement('IMG');
  img.src = 'muffin-grey.svg';
  img.className = 'ad-form__image';
  photoElement.append(img);
};

const onPhotoInputChange = () => {
  const file = photoOpenInput.files[0];

  if (file && isValidType(file)) {
    const url = URL.createObjectURL(file);
    document.querySelector('.ad-form__image').src = url;
  }
};

const choosenPhoto = () => {
  filePhotoChooser.addEventListener('change', onPhotoInputChange);
};

export { choosenAvatar, createImage, choosenPhoto };
