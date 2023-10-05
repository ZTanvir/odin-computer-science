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
// Question 6: Search JS object

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}
// Question 7: Parse a multi-dimensional array
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();
  console.log("first", first);
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}
