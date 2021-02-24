let multiply = (num1, num2) => num1 * num2;

let toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);

// This function returns a string padded with leading zeros
let padZeros = (num, totalLen) => {
  var numStr = num.toString();
  var numZeros = totalLen - numStr.length;
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};

let power = (base, exponent) => {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

let greet = (who) => console.log("Hello " + who);
