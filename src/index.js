
import validator from './validator.js';

let elcardNumber = document.getElementById("cardNumber");
const elcardValidation = document.getElementById("cardValidator");

const checkCC = () => {  
    let message = "";

    if (validator.isValid(elcardNumber.value))
        message = "Número valido";
    else
        message = "Número invalido";

    // Inicializar input con resultado
    elcardValidation.value = message;
};

// Evento botón submit
document.getElementById("cardForm").addEventListener("submit", (e) => {
    e.preventDefault()
    checkCC()
    const maskifyNumber = validator.maskify(elcardNumber.value)
    console.log (maskifyNumber);
    elcardNumber.value = maskifyNumber;
    
});
