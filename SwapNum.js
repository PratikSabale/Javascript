function swapFunc() {
  let num1 = 10,
    num2 = 20;
  //   let temp = num1;
  //   num1 = num2;
  //   num2 = temp;
  [num1, num2] = [num2, num1];
  console.log(num1, num2);
}
swapFunc();
