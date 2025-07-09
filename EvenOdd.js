const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  rl.question("Enter a number (or type 'exit' to quit): ", function (input) {
    if (input.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    let num = parseInt(input);

    if (isNaN(num)) {
      console.log("Invalid input. Please enter a number.");
    } else {
      if (num % 2 === 0) {
        console.log("Even");
      } else {
        console.log("Odd");
      }
    }

    askInput();
  });
}

askInput();
