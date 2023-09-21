// Question 1: Sum all numbers
function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}
let output = sumRange(3);
