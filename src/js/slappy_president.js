var right = true;
var img, c, ctx;
var drump = 'd', kin = 'k';
var current = drump;

function rest() {
  "use strict";
  
  if (right) {
    img = document.getElementById('rr');
  } else {
    img = document.getElementById('rl');
  }
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(img, 10, 10, c.width, c.height);
}

function initCanvas() {
  "use strict";
  console.debug('initCanvas()');
  c = document.getElementById("game");
  ctx = c.getContext("2d");
  img = document.getElementById("rr");
  ctx.drawImage(img, 10, 10, c.width, c.height);
  
  c.onclick = function () {
    if (right) {
      img = document.getElementById('sl');
      right = false;
    } else {
      img = document.getElementById('sr');
      right = true;
    }
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 10, 10, c.width, c.height);
    window.setTimeout(rest, 100);
  };
}

function changeToDrump() {
  "use strict";
  if (current !== drump) {
    $("#rr").attr('src', 'img/slappy_president/drump/rest_right.png');
    $("#rl").attr('src', 'img/slappy_president/drump/rest_left.png');
    $("#sr").attr('src', 'img/slappy_president/drump/slap_right.png');
    $("#sl").attr('src', 'img/slappy_president/drump/slap_left.png');
    initCanvas();
    current = drump;
  }
}

function changeToKin() {
  "use strict";
  if (current !== kin) {
    $("#rr").attr('src', 'img/slappy_president/kin/rest_right.jpg');
    $("#rl").attr('src', 'img/slappy_president/kin/rest_left.jpg');
    $("#sr").attr('src', 'img/slappy_president/kin/slap_right.jpg');
    $("#sl").attr('src', 'img/slappy_president/kin/slap_left.jpg');
    initCanvas();
    current = kin;
  }
}

$("#btn_drump").click(changeToDrump);
$("#btn_kin").click(changeToKin);