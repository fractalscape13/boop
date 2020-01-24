//user interface
$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    var input = parseInt($("input").val());
    beepboop(input);
    $("form").hide();
    $("h1").hide();
    $("#output").show();
    $("#result").text(finalOutput);
  });
});



//business logic
var finalOutput = [0,1,2,3];

function beepboop(num) {

}