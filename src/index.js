import validator from "./validator.js";

// elementos del DOM
const number = document.getElementById("number");//llamamos la Id por su nombre
const result = document.getElementById("result");
const btn = document.getElementById("btnEnviar");
//realizamos la validacion del numero ingresado
function validarNumero() {
  const cardNumber = number.value;//creamos una constante con el valor del numero y la evaluamos
  const isValid = validator.isValid(cardNumber);//creamos una cosntante para saber si es valido o no el numero ingresado
  if (isValid) {
    result.innerHTML = "Tarjeta válida";// Si al enviar el evento el resultado es valido nos bota una mensaje tarjeta valida 
  } else {
    result.innerHTML = "Tarjeta inválida";//Si al enviar el evento el resultado es valido nos bota una mensaje tarjeta invalida
  }
  const coverNumber = validator.maskify(cardNumber, "#", 4);//
  number.value = coverNumber;
}

//Capturamos un evento
btn.addEventListener("click", validarNumero);
const numberr = document.getElementById("number");//creamos una variable con el valor de Id
numberr.addEventListener("keyup", (event) => {//capturamos nuevamente el evento con el valor de la variable declarada y damos una funcion
  const numTarjeta = event.target.value;//Evaluamos el resultado de el evento de la linea (propiedad)
  event.target.value = numTarjeta.replace(/\D/g, "").replace(/\s/g, "");//reemplazmos los caracteres si nos dan valores que no sean numericos
});
