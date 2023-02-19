let form = document.querySelector("form");
let agreeAllCheckbox = form.querySelector('[name="agree-all"]');
let agree1 = form.querySelector('[name="agree1"]');
let agree2 = form.querySelector('[name="agree2"]');

const validate = (event) => {
  let errors = document.querySelector(".errors");
  if (form.name.value.trim().length === 0) {
    let liError = document.createElement("li");
    liError.innerText = "Wpisz imię i nazwisko";
    errors.appendChild(liError);
  }
  if (form.name.value.trim().length === 0) {
    let liError = document.createElement("li");
    liError.innerText = "Wpisz adres e-mail";
    errors.appendChild(liError);
  } else if (!form.email.value.includes("@")) {
    let liError = document.createElement("li");
    liError.innerText = "Adres e-mail musi zawierać znak @";
    errors.appendChild(liError);
  }
  if (!agree1.checked) {
    let liError = document.createElement("li");
    liError.innerText = "Nie wyraziłeś wymaganej Zgody 1";
    errors.appendChild(liError);
  }
  if (errors.children.length > 0) {
    event.preventDefault();
  }
};

const agreeAll = (event) => {
  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;
  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;
};

form.addEventListener("submit", validate);
agreeAllCheckbox.addEventListener("change", agreeAll);
