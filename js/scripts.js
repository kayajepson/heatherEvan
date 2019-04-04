//BACK END BUSINESS
function romanNumeral(numberInput) {
var romanOut = "";

for (var i = numberInput; i > 0; i-=1000) {
  if (numberInput >= 1000){
    romanOut += "M";
    numberInput -= 1000;
    }
  }
  for (var i = numberInput; i > 0; i-=900) {
    if (numberInput >= 900){
      romanOut += "CM";
      numberInput -= 900;
      }
    }

for (var i = numberInput; i > 0; i-=500) {
  if (numberInput >= 500){
    romanOut += "D";
    numberInput -= 500;
    }
  }
  for (var i = numberInput; i > 0; i-=400) {
    if (numberInput >= 400){
      romanOut += "CD";
      numberInput -= 400;
      }
    }

for (var i = numberInput; i > 0; i-=100) {
  if (numberInput >= 100){
    romanOut += "C";
    numberInput -= 100;
    }
  }
  for (var i = numberInput; i > 0; i-=90) {
    if (numberInput >= 90){
      romanOut += "XC";
      numberInput -= 90;
      }
    }
for (var i = numberInput; i > 0; i-=50) {
  if (numberInput >= 50){
    romanOut += "L";
    numberInput -= 50;
    }
  }
  for (var i = numberInput; i > 0; i-=40) {
    if (numberInput >= 40){
      romanOut += "XL";
      numberInput -= 40;
      }
    }
for (var i = numberInput; i > 0; i-=10) {
  if (numberInput >= 10){
    romanOut += "X";
    numberInput -= 10;
    }
  }
  for (var i = numberInput; i > 0; i-=9) {
    if (numberInput >= 9){
      romanOut += "IX";
      numberInput -= 9;
      }
    }
    for (var i = numberInput; i > 0; i-=4) {
      if (numberInput >= 4){
        romanOut += "IV";
        numberInput -= 4;
        }
      }
for (var i = numberInput; i > 0; i-=5) {
  if (numberInput >= 5){
    romanOut += "V";
    numberInput -= 5;
    }
  }
  for (var i = numberInput; i > 0; i-=1) {
    if (numberInput >= 1){
      romanOut += "I";
      }
    }
  return romanOut;
}




//FRONT END BUSINESS
$(document).ready(function() {
  $("form#romanNum").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#romanNumeral").val());
    var output = romanNumeral(numberInput);

    $("#result").text(output);

  });
});
