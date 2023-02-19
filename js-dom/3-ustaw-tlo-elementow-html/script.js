let btn = document.getElementById("btn-set-background");

btn.addEventListener("click", setBackground);

function setBackground() {
  let first = document.querySelector(".first");
  let second = document.querySelector(".second");
  first.className = first.className + " red-bg";
  second.className = second.className + " yellow-bg";
}
