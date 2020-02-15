import "../../sass/pages/sponsors.scss";

$(document).ready(function() {
  var navIcon = $(".menu-toggle");
  // console.log(navIcon);
  var menu = $(".menu");
  var active = false;
  var navIcon = $(".menu-toggle");
  navIcon.click(function() {
    if (!active) {
      active = true;
      navIcon.addClass("menu-toggle-active");
      menu.addClass("menuActive");
    } else {
      active = false;
      navIcon.removeClass("menu-toggle-active");
      menu.removeClass("menuActive");
    }
  });
});
