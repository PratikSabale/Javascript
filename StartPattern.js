function starFunc() {
  let row = 5;
  // for (let i = 1; i <= row; i++) {
  //   console.log("*".repeat(i));
  // }
  // for (let i = row; i >= 1; i--) {
  //   console.log("*".repeat(i));
  // }

  // for (let i = 1; i <= row; i++) {
  //   let space = " ".repeat(row - i);
  //   let star = "*".repeat(2 * i - 1);
  //   console.log(space + star);
  // }
  // for (let i = row; i >= 1; i--) {
  //   let space = " ".repeat(row - i);
  //   let star = "*".repeat(2 * i - 1);
  //   console.log(space + star);
  // }
  for (let i = 1; i <= row; i++) {
    let space = " ".repeat(row - i);
    let star = "*".repeat(i);
    console.log(space + star);
  }
}
starFunc();
