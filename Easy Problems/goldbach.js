// Write a function named checkGoldbach that uses Goldbach's Conjecture to log
// every pair of primes that sum to the number supplied as an argument

// The conjecture states that "you can express every even integer greater than 2
// as the sum of two primes"

// The function takes as its only parameter, an integer expectedSum, and logs
// all combinations of two prime numbers whose sum is expectedSum

// Log the prime pairs with the smaller number first. If expectedSum is odd or
// less than 4, your function should log null

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


function checkGoldbach(expectedSum) {
  if (expectedSum % 2 != 0 || expectedSum < 4) {
    return console.log(null);
  }

  let primeNumbers = []
  for (let counter = 1; counter < expectedSum; counter++) {
    if (isPrime(counter)) primeNumbers.push(counter);
  }

  primeNumbers.forEach(function(num) {
    let difference = expectedSum - num
    if (primeNumbers.includes(difference) && num <= difference) {
      console.log(`${num} + ${difference}`)
    }
  })
}


checkGoldbach(3);
// logs: null
console.log(' ')

checkGoldbach(4);
// logs: 2 2
console.log(' ')

checkGoldbach(12);
// logs: 5 7
console.log(' ')

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53