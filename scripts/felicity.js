$(document).ready(function () {
  const mediaQueryMobile = window.matchMedia("(min-width: 900px)");
  // const mediaQueryTablet = window.matchMedia(
  //   "(min-width: 769px) and (max-width: 1024px)"
  // );
  if (mediaQueryMobile.matches) {
    var selected_nav_el = $(".selected_nav");
    var selected_nav_str_og = $.trim($(".selected_nav").text());
    var selected_nav_str = $.trim($(".selected_nav").text()).slice(0, -1);
    console.log("shouldn't be here...");
    // Event handler for mouseover
    $(".nav_element").mouseover(function () {
      selected_nav_el.text(selected_nav_str); // Remove the asterisk
      selected_nav_el.css("font-size", "24px");
      selected_nav_el.css("font-weight", "normal");
      // selected_nav_el.css("transition-duration", "1s");

      if ($(this).text().slice(-1) != "*") {
        $(this).text($(this).text() + "*"); // Add asterisk to the end of the list item
      }
      $(this).css("font-size", "max(2.5vw, 24px)"); // Increase font size
      $(this).css("font-weight", "bold"); // Make font bold
      // $(this).css("transition-duration", "1s");
    });

    // Event handler for mouseout
    $(".nav_element").mouseout(function () {
      selected_nav_el.text(selected_nav_str_og); // Bring back the asterisk
      selected_nav_el.css("font-size", "");
      selected_nav_el.css("font-weight", "");
      // selected_nav_el.css("transition-duration", "1s");

      $(this).text($(this).text().slice(0, -1)); // Remove the asterisk
      $(this).css("font-size", "");
      $(this).css("font-weight", "");
      // $(this).css("transition-duration", "1s");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector("nav");
  const photo = document.querySelector(".background_photo");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    photo.classList.toggle("active");
  });
});
