// Create a function that computes the Greatest Common Divisor of two positive integers

function gcd(num1, num2) {
  let smaller_num = num1 < num2 ? num1 : num2;
  for (let counter = smaller_num; counter > 0; counter--) {
    if (num1 % counter === 0 && num2 % counter === 0) {
      return counter;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1

