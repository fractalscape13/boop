//user interface
$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    var input = parseInt($("input").val());
      if (!input) {
        location.reload();
      }
    beepboop(input);
    $("form").hide();
    $("h1").hide();
    $("#output").show();
    $("#result").text(finalOutput);
  });
});



//business logic
var finalOutput = [];

function beepboop(num) {
  for (i=0; i<=num; i++) {
    finalOutput.push(" " + i);
  }


  // var nums = num.toString.split("");
  // if ("1".includes(nums)) {

  // }
 // finalOutput.push(nums);
}