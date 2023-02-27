$(document).ready(function () {
  $(".accordion-item").click(function () {
    $(this).toggleClass("opened").find(".accordion-content").slideToggle();
  });
});
