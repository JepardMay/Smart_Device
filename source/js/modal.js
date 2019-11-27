'use strict';
(function () {
  var ESC_KEYCODE = 27;

  var callbackButton = document.querySelector('.main-nav__callback');

  var modal = document.querySelector('.modal');
  var close = modal.querySelector('.modal__close');
  var overlay = document.querySelector('.overlay');

  var form = modal.querySelector('form');
  var modalName = modal.querySelector('[name=modal-name]');
  var modalPhone = modal.querySelector('[name=modal-phone]');
  var modalQuestion = modal.querySelector('[name=modal-question]');

  var isStorageSupport = true;
  var storage = {
    name: '',
    phone: '',
    question: ''
  };

  var closeModal = function () {
    modal.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');
    document.body.style.overflow = 'auto';
  };

  try {
    storage = localStorage.getItem('modal-name');
    storage = localStorage.getItem('modal-phone');
    storage = localStorage.getItem('modal-question');
  } catch (err) {
    isStorageSupport = false;
  }

  if (callbackButton) {
    callbackButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('overlay--show');
      document.body.style.overflow = 'hidden';

      if (storage) {
        modalName.value = storage.name;
        modalPhone.value = storage.phone;
        modalQuestion.value = storage.question;
        modalName.focus();
      } else {
        modalName.focus();
      }
    });
  }

  if (close) {
    close.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('modal-name', login.value);
        localStorage.setItem('modal-phone', login.value);
        localStorage.setItem('modal-question', login.value);
      }
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      if (modal.classList.contains('modal--show')) {
        closeModal();
      }
    }
  });
})();
