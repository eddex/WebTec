var cookieName = 'style';

function changeToStyle(stylesheet) {
  "use strict";
  document.getElementById('pagestyle').setAttribute('href', 'css/styles/' + stylesheet + '.css');
  document.cookie = cookieName + '=' + stylesheet;
}

function restoreStyle() {
  "use strict";
  var value = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
  changeToStyle(value ? value.pop() : 'fire');
}