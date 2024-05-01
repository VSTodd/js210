//Write a program to determine a student’s grade based on the average of 3 scores
  // from the user

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'

// You may assume that all input values are valid positive integers.

function processGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3
  let grade
  if (average < 50) {
    grade = 'F';
  } else if (average < 70) {
    grade = 'C';
  } else if (average < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }

  console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`)
}

let readlineSync = require('readline-sync');

let score1 = Number(readlineSync.question('Enter Score 1: '));
let score2 = Number(readlineSync.question('Enter Score 2: '));
let score3 = Number(readlineSync.question('Enter Score 3: '));

processGrade(score1, score2, score3);