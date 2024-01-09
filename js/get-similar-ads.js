import { TYPES } from './data.js';

const adsTemplate = document.querySelector('#card').content.querySelector('.popup');

const createSimilarAds = (data) => {
  const { author, offer } = data;
  const adsElement = adsTemplate.cloneNode(true);
  adsElement.querySelector('.popup__avatar').src = `${author.avatar}`;
  adsElement.querySelector('.popup__title').textContent = `${offer.title}`;
  adsElement.querySelector('.popup__text--address').textContent = `${offer.address}`;
  adsElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  adsElement.querySelector('.popup__type').textContent = TYPES[offer.type];
  adsElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const popupFeatures = adsElement.querySelector('.popup__features');
  const popupFeaturesListItem = popupFeatures.querySelectorAll('.popup__feature');
  popupFeaturesListItem.forEach((popupListItem) => {
    const isFeatures = offer.features?.some((feature) => popupListItem.classList.contains(`popup__feature--${feature}`),
    );
    if (!isFeatures) {
      popupListItem.remove();
    }
  });

  if (offer.description) {
    adsElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    adsElement.querySelector('.popup__description').remove();
  }

  const popupPhotosList = adsElement.querySelector('.popup__photos');
  const popupPhotoItem = popupPhotosList.querySelector('.popup__photo');
  const photoTemplate = popupPhotoItem.cloneNode(true);
  popupPhotoItem.remove();
  offer.photos?.forEach((photo) => {
    const offerPhoto = photoTemplate.cloneNode(true);
    offerPhoto.src = `${photo}`;
    popupPhotosList.insertAdjacentElement('beforeend', offerPhoto);
  });

  return adsElement;
};

export { createSimilarAds };
