// Write a function that takes a number argument, and returns true if the number
  // is prime, or false if it is not.
// You may assume that the input is always a non-negative integer.


// iterate over every number from 2 up until the number before the given num
// if any divide into num without a remainder, break the loop and return false

function isPrime(num) {
  if (num <= 1) return false;

  let prime = true

  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      prime = false;
      break;
    }
  }

  return prime
}


console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false