$(document).ready(function () {
  let table = $("<table><tbody></tbody></table>");
  $("body").append(table);

  $("#get").click(function () {
    $.get("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        $.each(data, function (key, value) {
          table.append($(`<tr><td>${key}:</td><td>${value}</td></tr>`));
        });
      })
      .fail(function (error) {
        console.error(error);
      });
  });

  $("#getjson").click(function () {
    $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        $.each(data, function (key, value) {
          table.append($(`<tr><td>${key}:</td><td>${value}</td></tr>`));
        });
      })
      .fail(function (error) {
        console.error(error);
      });
  });
});
