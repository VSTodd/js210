// Write a function that takes a number of rows as the argument nStars and logs
  // a square of numbers and asterisks
// For example, if nStars is 7, log the following pattern:

// no stipulation on length - loop through every number between 1 and given num
// log current num + astericks * given_num minus current_num
// end when reach given_num

function generatePattern(nStars) {
  let numbersLog = ''

  for (let currentNum = 1; currentNum <= nStars; currentNum++) {
    numbersLog += currentNum
    console.log(`${numbersLog}${'*'.repeat(nStars - currentNum)}`)
  }
}

generatePattern(9);

// console output
/*
1******
12*****
123****
1234***
12345**
123456*
1234567
*/