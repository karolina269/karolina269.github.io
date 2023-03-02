$(document).ready(function () {
  $("button").click(function () {
    $(this).after($('<div id="dane-programisty"></div>'));
    $("#dane-programisty").load("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php");
  });
});
