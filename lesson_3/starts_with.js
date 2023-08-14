/*
Implement a function that determines whether a string begins with another string
If it does, the function should return true, or false otherwise.

input: 2 strings
return: boolean

check length of searchString and take the same length from string in variable subString
  - Do so with for loop
check if subString and searchString are equivalent
*/

function startsWith(string, searchString) {
  let subString = '';
  for (let counter = 0; counter < searchString.length; ++counter) {
    subString += string[counter];
  }
  return(subString == searchString);
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false