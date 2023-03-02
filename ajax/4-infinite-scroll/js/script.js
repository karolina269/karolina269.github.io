let preloading = false;

let preloader = document.getElementById("preloader");

const showPreloader = () => {
  preloader.style.display = "block";
  preloading = true;
};
const hidePreloader = () => {
  preloader.style.display = "none";
  preloading = false;
};

const scrollToEndOfPage = () => {
  let d = document.documentElement;
  if (Math.ceil(d.scrollTop + d.clientHeight) >= d.scrollHeight) {
    getData();
  }
};

const getData = () => {
  if (!preloading) {
    showPreloader();
    fetch("https://akademia108.pl/api/ajax/get-users.php")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((user) => {
          let pId = document.createElement("p");
          let pName = document.createElement("p");
          let pWebsite = document.createElement("p");

          pId.innerText = `User ID: ${user.id}`;
          pName.innerText = `User Name: ${user.name}`;
          pWebsite.innerHTML = `User URL: ${user.website}<br>--------`;

          document.body.appendChild(pId);
          document.body.appendChild(pName);
          document.body.appendChild(pWebsite);
        });
        hidePreloader();
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
