const validator = {
  isValid: (cardNumber) => {
    const length = cardNumber.length;
    let addDigits = 0;
    if (length % 2 == 0) {

      for (let i = length - 1; i >= 0; i--) 
      {
        let currentDigit = parseInt(cardNumber[i]);
        if (i % 2 == 0) 
        { currentDigit *= 2;
          if (currentDigit > 9) 
          {
          
            let firstNumber = parseInt(currentDigit / 10); 
            let trailingNumber = currentDigit % 10; 

            
            currentDigit = firstNumber + trailingNumber;
          }
        }
        addDigits += currentDigit; 
      }
    }
    else {
    
      for (let i = length - 1; i >= 0; i--) {
        let currentDigit = parseInt(cardNumber[i]);
        if ((i - 1) % 2 == 0) 
        { currentDigit *= 2;
          if (currentDigit > 9) {
            
            let firstNumber = parseInt(currentDigit / 10);
            let trailingNumber = currentDigit % 10;

            
            currentDigit = firstNumber + trailingNumber;
          }
        }

        addDigits += currentDigit; 
      }
    }
    const resultado = (addDigits % 10) === 0;
    console.log(resultado, addDigits);
    return resultado;
  },
  maskify: (cardNumber) => {
    let myArray = []
    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        myArray.push("#");
      } else {
        myArray.push(cardNumber[i]);
      }
    }
    return myArray.join("");
  }
};

export default validator;

