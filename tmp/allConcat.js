var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#math-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var math = $('#math').val();
    var output;
    var simpleCalculator = new Calculator("hot pink");
    if (math === 'add') {
      output = simpleCalculator.add(num1, num2);

    } else if (math === 'subtract') {
      output = simpleCalculator.subtract(num1, num2);

    } else if (math === 'multiply') {
      output = simpleCalculator.multiply(num1, num2);

    } else {
      output = simpleCalculator.divide(num1, num2);

    }
    $('#solution').prepend('<p>Your answer is ' + output + '</p>');
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
