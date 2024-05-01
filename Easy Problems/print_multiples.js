// Write a function logMultiples that takes one argument number.
//It should log all multiples of the argument between 0 and 100 (inclusive) that
// are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// iterate over each number between 100 and 1 (in descending order)
// using a conditional, check if the number is divisible by the given num
  // if so, output it

function logMultiples(num) {
  for (let currentNum = 100; currentNum >= num; currentNum--) {
    if (currentNum % num === 0 && currentNum % 2 != 0) {
      console.log(currentNum);
    }
  }
}

logMultiples(17);