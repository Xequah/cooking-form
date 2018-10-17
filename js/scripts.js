var outputLiters = function(inputNumber) {
  return inputNumber / 3.78541
}

var outputTs = function(inputNumber) {
  return inputNumber / 3
}

var outputOz = function(inputNumber) {
  return inputNumber / 16
}

$(document).ready(function() {
  $("form#liter").submit(function(event) {
    event.preventDefault();
    var litersToGallons = $("#litersToGallons").val();
    var result = outputLiters(litersToGallons)
    $("#outputLiters").text(result + "g");
  });

  $("form#ts").submit(function(event) {
    event.preventDefault();
    var teaspoonsToTablespoons = $("#teaspoonsToTablespoons").val();
    var result = outputTs(teaspoonsToTablespoons)
    $("#outputTs").text(result + "Tbls");
  });

  $("form#oz").submit(function(event) {
    event.preventDefault();
    var ouncesToPounds = $("#ouncesToPounds").val();
    var result = outputOz(ouncesToPounds)
    $("#outputOz").text(result + "lbs");
  });

});
