const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number of terms : ", function (termInput) {
  r1.question("Enter first number (a) : ", function (aInput) {
    r1.question("Enter secound number (b) : ", function (bInput) {
      let term = parseInt(termInput);
      let a = parseInt(aInput),
        b = parseInt(bInput);
      function fibonacciFunc() {
        if (term > 1) {
          for (let i = 0; i < term; i++) {
            console.log(a);
            let next = a + b;
            a = b;
            b = next;
          }
        }
      }
      fibonacciFunc();
      r1.close();
    });
  });
});
