// Question 1: Sum all numbers
function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}
let output = sumRange(3);

// Question 2: Power function
function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}
// Question 3: Calculate factorial
function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
// Question 5: Product of an array
function productOfArray(array) {
  // base case
  if (array.length === 1) {
    return array[array.length - 1];
  }
  let lastItem = array[array.length - 1];

  array.pop();
  // recursion function
  return lastItem * productOfArray(array);
}
console.log("result", productOfArray([1, 2, 3, 10]));
