const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  r1.question(
    "Enter number to check Palindrome or Not(or type 'exit' to quit):",
    function (input) {
      if (input.toLowerCase() === "exit") {
        r1.close();
        return;
      }
      let num = parseInt(input);
      if (isNaN(num)) {
        console.log("Invalid input. Please enter a number.");
        askInput();
      } else {
        function palindromeFunc() {
          let reverse = parseInt(num.toString().split("").reverse().join(""));
          if (num === reverse) {
            console.log(`${num} is Palindrome`);
          } else {
            console.log(`${num} is NOT Palindrome`);
          }
        }
        palindromeFunc();
        askInput();
      }
    }
  );
}
askInput();
