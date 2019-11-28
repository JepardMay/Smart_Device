'use strict';
(function () {
  var menu = Array.from(document.getElementsByClassName('js--menu'));

  var accordion = function (element) {
    var list = element.nextElementSibling;
    if (list.classList.contains('section__menu--open')) {
      element.classList.toggle('section__title--open');
      list.classList.toggle('section__menu--open');
    } else {
      menu.forEach(function (it) {
        var openList = it.nextElementSibling;
        if (openList.classList.contains('section__menu--open')) {
          it.classList.remove('section__title--open');
          openList.classList.remove('section__menu--open');
        }
      });
      element.classList.toggle('section__title--open');
      list.classList.toggle('section__menu--open');
    }
  };

  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {
      accordion(this);
    });
  }
})();
