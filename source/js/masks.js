'use strict';
(function () {
  var phones = Array.from(document.getElementsByClassName('js--phone-mask'));
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  phones.forEach(function (it) {
    var mask = IMask(it, maskOptions);
  });
})();
