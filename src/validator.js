const validator = {
  isValid: function(numTarjeta) {
    {
      //retornamos los numeros en forma de funcion los invertimos y separamos
      const reversar = numTarjeta.toString().split("").reverse(); 
      let total = 0; //realiza la suma de los digitos 

    
      //damos al indice el valor de 0, para buscar los numeros pares si fuera impares comensariamos desde 1
      for (let i = 0; i < reversar.length; i++) {  
        let numeSuma = parseInt(reversar[i]); 
        //verificamos los numeros, para multiplicar los que se encuntran en pocision impar por 2
        if (i % 2 === 1) { 
          numeSuma *= 2; 
          if (numeSuma > 9) {
            numeSuma -= 9;
          }
        }
        total += numeSuma; //concatenamos el valor de la pocision con el resultado de numeSuma
      }
      if (total % 10 === 0) { // verificar si el valor es divisible para 10
        return true; // si el resultado es correcto nos devuelve true
      } else {
        return false; // si el resultado es incorrecto nos devuelve false
      }
    }
  },

  /*maskify: function (numTarjeta) {
    return numTarjeta.replace(/.(?=.{4})/g, "#")*///reemplazmos todo con expresiones regulares

  maskify: function (numTarjeta) {//creamos una funcion con el vamor de isvalid
    const convirtiendo = numTarjeta.split("");//dividimos el string en una array
    let result = ''; 
    for (let i = 0; i < numTarjeta.length - 4; i++) {//Medimos la longitud del numero ingresado menos los 4 ultimos para enmmascarar
      convirtiendo[i] = "#";//convertimos los digitos en numeral menos los 4 ultimos
    }
    for (let i = 0; i < convirtiendo.length; i ++) {
      result = result + convirtiendo[i];
    }
   
    return result  
  },
};

export default validator;