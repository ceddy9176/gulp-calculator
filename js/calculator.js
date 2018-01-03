function Calculator() {}

Calculator.prototype.add = function (number1, number2) {
  return parseInt(number1) + parseInt(number2);
};

Calculator.prototype.multiply = function (number1, number2) {
  return parseInt(number1) * parseInt(number2);
};

Calculator.prototype.divide = function (number1, number2) {
  return parseInt(number1) % parseInt(number2);
};

Calculator.prototype.subtract = function (number1, number2) {
  return parseInt(number1) - parseInt(number2);
};

exports.calculatorModule = Calculator;
