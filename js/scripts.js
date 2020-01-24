//user interface
$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    var input = parseInt($("input").val());
      if (!input) {
        location.reload();
      }
    makeArray(input);
    $("form").hide();
    $("h1").hide();
    $("#output").show();
    $("#result").text(finalOutput);
  });
});



//business logic
var numOutput = [];
var finalOutput = [];

function makeArray (num) {
  for (i=0; i<=num; i++) {
    numOutput.push(" " + i);
  }
  console.log(numOutput);
  beepboop(numOutput);
}

function beepboop (numArray) {
  for (i=0; i<numArray.length; i++) {
    if (numArray[i] == 0) {
      finalOutput.push(i);
    } else if (numArray[i] == 1) {
      finalOutput.push(" beep");
    } else if (numArray[i] == 2) {
      finalOutput.push(" boop");
    } else if (numArray[i] == 3) {
      finalOutput.push(" I'm sorry Dave, I'm afraid I can't do that")
    } else if (numArray[i] > 9) {
      var bigNum = numArray[i].toString();
      var bigArray = bigNum.split("");
          if (bigArray.includes("3")) {
            finalOutput.push(" I'm sorry Dave, I'm afraid I can't do that")
          } else if (bigArray.includes("2")) {
            finalOutput.push(" boop");
          } else if (bigArray.includes("1")) {
            finalOutput.push(" beep");
          } else {
            finalOutput.push(" " + bigArray.toString());
          }
      // console.log(bigArray);
    } else {
      finalOutput.push(" " + i);
    }
  }
}
  // var nums = num.toString.split("");
  // if ("1".includes(nums)) {

  // }
 // finalOutput.push(nums);
