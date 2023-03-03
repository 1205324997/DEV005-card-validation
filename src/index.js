import validator from "./validator.js";

const number = document.getElementById("number");
const result = document.getElementById("result");
const btn = document.getElementById("btnPay");

function printValidation() {
  const cardNumber = number.value;
  const isValid = validator.isValid(cardNumber);
  if (isValid) {
    result.innerHTML = "Tarjeta válida";
  } else {
    result.innerHTML = "Tarjeta inválida";btn
  }

  const coverNumber = validator.maskify(cardNumber, "#", 4);
  number.value = coverNumber;
}

btn.addEventListener("click", printValidation);
const numberr = document.getElementById("number");
numberr.addEventListener("keyup", (event) => {
  const num = event.target.value;
  event.target.value = num.replace(/\s/g, "").replace(/\D/g,"");
});
