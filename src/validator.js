const validator = {
  isValid: function (num) {
    const cardNumberArray = Array.from(String(num), Number);
    let positionSum = 0;

    for (let i = cardNumberArray.length - 1; i >= 0; i--) {
      let multiplication = 0;

      if (i % 2 === 0) {
        multiplication = cardNumberArray[i] * 2;
        if (multiplication >= 10) {
          let remainder = 0;
          let sumOfDigits = 0;

          while (multiplication) {
            remainder = multiplication % 10;
            sumOfDigits = sumOfDigits + remainder;
            multiplication = Math.floor(multiplication / 10);
          }

          positionSum += sumOfDigits;
        } else {
          positionSum += multiplication;
        }
      } else {
        positionSum += cardNumberArray[i];
      }
    }

    const final = positionSum % 10;

    if (final === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (string, mask, numberOfDigits) {
    return (
      ("" + string).slice(0, -numberOfDigits).replace(/./g, mask) +
      ("" + string).slice(-numberOfDigits)
    );
  },
};

export default validator;
