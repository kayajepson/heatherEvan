
function romanNumeral(number) {
  if (number[0] ==="1"){
    number = "I";
    return number;
  }
};
// }  else {
//     return true;
//   }

// var romanNumeral = function(number) {
//     return true;
//   }










$(document).ready(function() {
  $("form#romanNum").submit(function(event) {
    event.preventDefault();
    var number = $("input#romanNumeral").val();
    var output = romanNumeral(number);

    $("#result").text(output);

  });
});
