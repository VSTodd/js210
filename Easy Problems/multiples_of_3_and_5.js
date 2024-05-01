// Write a function that logs the integers from 1 to 100 (inclusive) that are
// multiples of either 3 or 5. If the number is divisible by both 3 and 5,
// append an "!" to the number.

// iterate over each number from one to 100
  // if number is divisible by 3 or 5, append an ! to the number
  // otherwise log the number as is


function multiplesOfThreeAndFive() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber ++) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(`${currentNumber}!`);
    } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      console.log(String(currentNumber));
    }
  }
}

multiplesOfThreeAndFive();


// how would you change your function so it takes, as arguments, the range of
// numbers it should check?

function customMultiplesOfThreeAndFive(min, max) {
  for (let currentNumber = min; currentNumber <= max; currentNumber ++) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(`${currentNumber}!`);
    } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      console.log(String(currentNumber));
    }
  }
}

customMultiplesOfThreeAndFive(15, 30);