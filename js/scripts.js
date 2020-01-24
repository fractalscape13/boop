//user interface
$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    var input = parseInt($("input").val());
    beepboop(input);
    $("form").hide();
    $("#output").show();
    $("#result").text(finalOutput);
  });
});


var finalOutput = [];

function beepboop(num) {

}