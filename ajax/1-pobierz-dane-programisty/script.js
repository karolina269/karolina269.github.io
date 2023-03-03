$(document).ready(function () {
  $("button").click(function () {
    $.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
      .done(function (data) {
        $("button").after($('<div id="dane-programisty"></div>'));
        const dataObj = JSON.parse(data);
        $.each(dataObj, function (key, value) {
          $("#dane-programisty").append($(`<p>${key}: ${value}</p>`));
        });
      })
      .fail(function (error) {
        console.error(error);
      });
  });
  // $("button").click(function () {
  //   $(this).after($('<div id="dane-programisty"></div>'));
  //   $("#dane-programisty").load("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php");
  // });
});
