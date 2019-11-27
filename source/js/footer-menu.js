'use strict';
(function () {
  var menu = document.getElementsByClassName('js--menu');

  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {
      var list = menu[i].nextElementSibling;
      menu[i].classList.toggle('section__title--open');
      list.classList.toggle('section__menu--open');
    });
  }
})();
