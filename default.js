function addNumbers(num1, num2 = 0) {
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  //   num2 = num2 || 0;
  return num1 + num2;
}

const total = addNumbers(12, 4);
console.log(total);
