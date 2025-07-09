const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  r1.question(
    "Enter numbers seprated with (,) comma (or type 'exit' to quit) : ",
    function (input) {
      if (input.toLowerCase() === "exit") {
        r1.close();
        return;
      }
      let num = input.split(",").map(Number);
      //   console.log(num);
      function findMax() {
        let maxnum = num[0];
        for (let i = 1; i < num.length; i++) {
          if (num[i] > maxnum) {
            maxnum = num[i];
          }
        }
        console.log(maxnum);
      }
      findMax();
      askInput();
    }
  );
}
askInput();
