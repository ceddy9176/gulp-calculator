var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  var calculator = new Calculator ();
  $('.button').click(function(event){
    event.preventDefault();
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var output;

    if ($(".operator:checked").val() === "+") {
      output = calculator.add(number1, number2);
    } else if ($(".operator:checked").val() === "-") {
      output = calculator.subtract(number1, number2);
    } else if ($(".operator:checked").val() === "%") {
      output = calculator.divide(number1, number2);
    } else if ($(".operator:checked").val() === "*") {
      output = calculator.multiply(number1, number2);
    }

    $(".result").val(output);

  });
});
