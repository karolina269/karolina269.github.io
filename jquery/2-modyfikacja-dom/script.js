$(document).ready(function () {
  $("#last-to-first").click(function () {
    $("p").first().before($("p").last());
  });
  $("#first-to-last").click(function () {
    $("p").last().after($("p").first());
  });
});
