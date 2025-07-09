const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  r1.question("Enter a number (or type 'exit' to quit):  ", function (input) {
    if (input.toLowerCase() === "exit") {
      r1.close();
      return;
    }
    const n = parseInt(input);
    function isPrime() {
      if (n <= 1) {
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    console.log(isPrime());
askInput();
  });
}

askInput();
