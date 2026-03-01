// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Exercise #2:
// When the user enters input text, copy the user input to the output area

$(document).ready(() => {
  //Exercise 1
  $("#copy").on("click", (event) => {
    console.log("Click Event", event);
    $("#output1").text($("#userInput1").val());
  });

  // Exercise 2
  $("#userInput2").on("input", (event) => {
    console.log("Input Event", event);
    $("#output2").text($("#userInput2").val());
  });
});
