// Write a function that takes two arguments:
  // a string to be split
  // a delimiter character
// The function logs the split strings to the console, as shown below:


/*
input: 2 strings
output: string(s)

- initialize deliminator_index, set to 0
- use a loop, iterating every char of a string by index
- if char is equal to deliminator character, return string from last deliminator index + 1 to current - 1
  - log to console
- end loop when end of string is reached
*/
function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let substring = '';
  for (let charIndex = 0; charIndex < string.length; charIndex++) {
    if (delimiter === '') {
      console.log(string[charIndex]);
    } else if (string[charIndex] === delimiter) {
      console.log(substring);
      substring = '';
    }
    else {
      substring = substring + string[charIndex];
    }
  }

  if (substring) console.log(substring);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world


splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o


splitString('hello', ';');
// logs:
// hello


splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello