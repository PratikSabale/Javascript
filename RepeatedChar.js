const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function askInput() {
  r1.question("Enter String (or type 'exit' to quit):", function (input) {
    if (input.toLowerCase() === "exit") {
      r1.close();
      return;
    }
    let inputstr = input;
    function findRepeatedChar() {
      let counts = {};
      for (let i = 0; i < inputstr.length; i++) {
        let char = inputstr[i].toLowerCase();
        if (char >= "a" && char <= "z") {
          if (counts[char]) {
            counts[char]++;
          } else {
            counts[char] = 1;
          }
        }
      }
      console.log(`letters counts in ${inputstr} are :`);
      for (let key in counts) {
        console.log(key + " = " + counts[key]);
      }
    }
    findRepeatedChar();
    askInput();
  });
}
askInput();
