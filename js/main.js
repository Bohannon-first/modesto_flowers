const btnBurger = document.querySelector('.page-header__btn-burger');
const mainMenuAdaptive = document.querySelector('.main-nav__adaptive');
const btnCloseMainMenuAdaptive = document.querySelector('.main-nav__adaptive-btn-close');
const btnNextFormCooperation= document.querySelector('.form-cooperation__button-send');
const formContacts = document.querySelector('.form-cooperation__contacts');
const formPassword = document.querySelector('.form-cooperation__password');
const btnBackFormCooperation = document.querySelector('.form-cooperation__button-back');
const btnSendForm = document.querySelector('.form-cooperation__button-confirm');
const modalRegistration = document.querySelector('.modal');
const modalBtnClose = modalRegistration.querySelector('.modal__btn-close');

const showAdaptiveMenu = () => {
  mainMenuAdaptive.classList.remove('hidden');
};

btnBurger.addEventListener('click', showAdaptiveMenu);

const hiddenAdaptiveMenu = () => {
  mainMenuAdaptive.style.animation = 'hiddenMenu 0.5s ease 0s 1 normal forwards';
  setTimeout(() => {
    mainMenuAdaptive.classList.add('hidden');
    mainMenuAdaptive.removeAttribute('style');
  }, 500);
}

btnCloseMainMenuAdaptive.addEventListener('click', hiddenAdaptiveMenu);

const nextSlideForm = (evt) => {
  evt.preventDefault();
  if (formPassword.classList.contains('hidden')) {
    formContacts.classList.add('hidden');
    formPassword.classList.remove('hidden');
  }
};

btnNextFormCooperation.addEventListener('click', nextSlideForm);

const previousSlideForm = (evt) => {
  evt.preventDefault();
  if (formContacts.classList.contains('hidden')) {
    formPassword.classList.add('hidden');
    formContacts.classList.remove('hidden');
    formContacts.style.animation = 'backSlide 0.5s ease 0s 1 normal forwards';
  }
};

btnBackFormCooperation.addEventListener('click', previousSlideForm);

const showModalRegistration = () => {
  modalRegistration.classList.remove('hidden');
};

btnSendForm.addEventListener('click', showModalRegistration);

const closeModalRegistration = () => {
  modalRegistration.style.animation = 'closeModal 0.5s ease 0s 1 normal forwards';
  setTimeout(() => {
    modalRegistration.classList.add('hidden');
    modalRegistration.removeAttribute('style')
  }, 500);
}

modalBtnClose.addEventListener('click', closeModalRegistration);

// Проверка на нажатую кнопку Esc и клик по оверлею
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isOverlayClick = (evt) => evt.target === modalRegistration;

// Проверка на нажатую кнопку Esc и закрытие попапа с объявлением
const onPopupFullAdEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModalRegistration();
  }
};

document.addEventListener('keydown', onPopupFullAdEscKeydown);

// Проверка по клику на оверлей и закрытие попапа с объявлением
const onPopupFullAdOverlayClick = (evt) => {
  if (isOverlayClick(evt)) {
    evt.preventDefault();
    closeModalRegistration();
  }
};

document.addEventListener('click', onPopupFullAdOverlayClick);
