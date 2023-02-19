let form = document.getElementById("form");

const submitForm = (event) => {
  event.preventDefault();
  let firstName = form.fname.value;
  let lastName = form.lname.value;
  console.log(`${firstName} - wartość pola fname, ${lastName} - wartość pola lname`);
};

form.addEventListener("submit", submitForm);
