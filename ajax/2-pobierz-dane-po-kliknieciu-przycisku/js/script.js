let btn = document.getElementById("fetch");

const getData = () => {
  fetch("https://akademia108.pl/api/ajax/get-post.php", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let table = document.createElement("table");
      document.body.appendChild(table);

      dataArr = Object.entries(data);

      for (let [key, value] of dataArr) {
        let row = table.insertRow(-1);
        row.insertCell(0).innerText = `${key}:`;
        row.insertCell(1).innerText = value;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

btn.addEventListener("click", getData);
