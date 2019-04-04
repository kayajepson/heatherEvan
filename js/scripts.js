// function numberOutput(userInput) {

var numberOutput = function(userInput) {
  return false;
};










$(document).ready(function() {
  $("form#romanNum").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#arabic").val();
    var roman = numberOutput(userInput);

    $("#result").text(numberOutput);

  });
});
