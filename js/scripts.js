
function romanNumeral(numberInput) {

// var search = numberInput.split("");
var romanout = "";

for (var i = numberInput; i > 0; i-=1000) {
  if (numberInput >= 1000){
    romanout += "M";
    numberInput -= 1000;


    }
  }
for (var i = numberInput; i > 0; i-=500) {
  if (numberInput >= 500){
    romanout += "D";
    numberInput -= 500;


    }
  }
for (var i = numberInput; i > 0; i-=100) {
  if (numberInput >= 100){
    romanout += "C";
    numberInput -= 100;


    }
  }
for (var i = numberInput; i > 0; i-=50) {
  if (numberInput >= 50){
    romanout += "L";
    numberInput -= 50;


    }
  }
for (var i = numberInput; i > 0; i-=10) {
  if (numberInput >= 10){
    romanout += "X";
    numberInput -= 10;


    }
  }
for (var i = numberInput; i > 0; i-=5) {
  if (numberInput >= 5){
    romanout += "V";
    numberInput -= 5;



    }
  }
  for (var i = numberInput; i > 0; i-=1) {
    if (numberInput >= 1){
      romanout += "I";



      }
    }
  return romanout;
}
// }  else {
//     return true;
//   }

// var romanNumeral = function(numberInput) {
//     return true;
//   }










$(document).ready(function() {
  $("form#romanNum").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#romanNumeral").val());
    var output = romanNumeral(numberInput);

    $("#result").text(output);

  });
});
