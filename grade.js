// Call prompt-sync in order to get the actual prompting function.
const prompt = require("prompt-sync")();
// Define variable score.
// Prompt users to input student marks, which is stored in the score variable.
const score = prompt("Please Input Student Marks: ");
// Define a function studentGradeGenerator.
function studentGradeGenerator() {
//Pass student marks into the studentGradeGenerator.
//Execute a block of code if the specified condition is true and assign a grade to the student mark.
// If a condition is false, execute another block of code.
// Else if student input does not meet any condition, print out Invalid Input!
  if (score > 79 && score < 100) {
    console.log("A");
  } else if (score >= 60 && score <= 79) {
    console.log("B");
  } else if (score >= 49 && score <= 59) {
    console.log("C");
  } else if (score >= 40 && score <= 48) {
    console.log("D");
  } else if (score >= 0 && score <= 39) {
    console.log("E");
  }else {
    console.log("Invalid Input!");
  }
}
//Call the function studentGradeGenerator.
studentGradeGenerator();
