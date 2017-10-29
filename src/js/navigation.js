function changeActiveNav(e) {
  "use strict";
  $('#home').removeClass('active');
  $('#canvas').removeClass('active');
  $('#form').removeClass('active');
  $('#text').removeClass('active');
  $(e.target).addClass('active');
}

function handleMobileMenu() {
  "use strict";
  if (window.innerWidth < 560) {
    $('#menu_elements').hide();
  } else {
    $('#menu_elements').show();
  }
}

function toggleMobileMenu() {
  "use strict";
  if (window.innerWidth < 560) {
    $('#menu_elements').toggle(300);
    console.info('toggle mobile menu');
  }
}

function changeContent(e) {
  "use strict";
  var name = 'home'; // set to 'home', 'canvas', ... for debugging.
  if (e !== null) {
    changeActiveNav(e);
    name = $(e.target).attr('id');
  }
  $('#content').load("content/" + name + ".html");
  toggleMobileMenu();
}

$(document).ready(function () {
  "use strict";
  changeContent(null);
  handleMobileMenu();
  
  $("#home").click(changeContent);
  $("#canvas").click(changeContent);
  $("#form").click(changeContent);
  $("#text").click(changeContent);
  
  $("#mobile-nav-title").click(toggleMobileMenu);
  
  $(window).resize(handleMobileMenu);
});