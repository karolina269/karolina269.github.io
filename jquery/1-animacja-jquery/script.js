$(document).ready(function () {
  $("#animate").click(function () {
    $(this).attr("disabled", true);
    $("#square").animate({ left: "100px", height: "100px", width: "100px" }, 1000, function () {
      $(this).animate({ backgroundColor: "blue" }, 1000, function () {
        const newH2 = $("<h2>Animacja zakończona</h2>");
        $(this).append(newH2);
      });
    });
  });
});
