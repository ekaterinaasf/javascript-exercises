function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

function multiply(arr) {
  return arr.reduce((a, b) => a * b);
}

function power(x, y) {
  return Math.pow(x, y);
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log("2+2=", add(2, 2));
console.log("10-4=", subtract(10, 4));
console.log("Sum of 1+3+5+7+9=25? ", sum([1, 3, 5, 7, 9]));
console.log(
  "multiply([2,4,6,8,10,12,14])=645120? ",
  multiply([2, 4, 6, 8, 10, 12, 14])
);
console.log("power(4,3)=64? ", power(4, 3));
console.log("factorial(5)=120? ", factorial(5));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
