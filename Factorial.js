const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  r1.question("Enter number(or type 'exit' to quit) : ", function (input) {
    if (input.toLowerCase() === "exit") {
      r1.close();
      return;
    }
    let num = input;
    function factorialFind() {
      let fact = 1;
      for (let i = 1; i <= num; i++) {
        fact = fact * i;
      }
      console.log(`Factorial of ${num} is ${fact}`);
    }
    factorialFind();
    askInput();
  });
}
askInput();
