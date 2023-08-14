// Write a function that iterates over the integers from 1 to 100, inclusive
// For multiples of three, log "Fizz" to the console
// For multiples of five, log "Buzz"
// For numbers which are multiples of both three and five, log "FizzBuzz"
// For all other numbers, log the number.

// create a loop, going thru every # between 1 and 100
// have a conditional for what to log to the console depending on the current #


function fizzbuzz() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log ('Fizz');
    } else if (num % 5 === 0) {
      console.log ('Buzz');
    } else {
      console.log(num);
    }
  }
}

fizzbuzz();