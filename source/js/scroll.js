'use strict';
(function () {
  var anchors = Array.from(document.querySelectorAll('a[href*="#"]'));

  anchors.forEach(function (it) {
    it.addEventListener('click', function (evt) {
      var blockID = it.getAttribute('href');
      if (blockID !== '#') {
        evt.preventDefault();
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
