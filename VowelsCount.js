const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  r1.question("Enter String (or type 'exit' to quit): ", function (input) {
    if (input.toLowerCase() === "exit") {
      r1.close;
      return;
    }
    let inputStr = input;
    function vowelsFunc() {
      let vowels = ["a", "e", "i", "o", "u"];
      let count = 0;
      let vowelsfound = [];
      for (let i = 0; i < inputStr.length; i++) {
        if (vowels.includes(inputStr[i])) {
          count++;
          vowelsfound.push(inputStr[i]);
        }
      }
      console.log(`Vowls count in ${inputStr} is ${count}`);
      console.log("Founded vowels : " + vowelsfound.join(", "));
    }
    vowelsFunc();
    askInput();
  });
}
askInput();
