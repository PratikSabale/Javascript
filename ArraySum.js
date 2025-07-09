const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function askInput() {
  r1.question(
    "Enter array element seprated by (,) comma (or type 'exit' to quit): ",
    function (input) {
      if (input.toLowerCase() === "exit") {
        r1.close();
        return;
      }
      let arr = input.split(",").map(Number);
      //   console.log(typeof arr);
      function sumFunc() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        console.log(`The sum of [${arr}] is ${sum}`);
      }
      sumFunc();
      askInput();
    }
  );
}
askInput();
