// Write a password guessing program that tracks how many times the user enters
  // the wrong password
// If the user enters the password wrong three times, log
  // 'You have been denied access.' and terminate the program
// If the password is correct, log 'You have successfully logged in.' and end
  // the program.

let readlineSync = require('readline-sync');
let password = 'password'
let success = false

for (let attempt = 1; attempt <= 3; attempt++) {
  let guess = readlineSync.question('What is the password: ')
  if (guess === password) {
    success = true
    break
  }
}

if (success) {
  console.log('You have successfully logged in.')
} else {
  console.log('You have been denied access.')
}