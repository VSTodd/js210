// Write a function that takes a positive integer as an argument, and logs all the
// odd numbers from 1 to the passed in number (inclusive).
// All numbers should be logged on separate lines.

// create a list of numbers from 1 to the given num
// iterate over said list, logging to the screen if it's odd
  // check if num is odd if it has a remainder when divided by 2


function logOddNumbers(num) {
  for (let counter = 1; counter <= num; counter++) {
    if (counter % 2 != 0) console.log(counter);
  }
}

logOddNumbers(19);


//You can remove the conditional inside the loop and increment currentNumber by
//2 with each step, instead of 1

function logOddNumbers(num) {
  for (let counter = 1; counter <= num; counter += 2) {
    console.log(counter);
  }
}

logOddNumbers(19);


// Instead of a conditional that checks for odd numbers, you can write a
// conditional that checks for even numbers, but skips them with the continue
// statement.

function logOddNumbers(num) {
  for (let counter = 1; counter <= num; counter++) {
    if (counter % 2 == 0) continue;
    console.log(counter);
  }
}

logOddNumbers(19);