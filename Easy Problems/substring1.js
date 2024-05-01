/*
- Write a function that returns a substring of a string based on a starting
  index and length

- The start argument is the starting index
  - If negative, treat it as strLength + start where strLength is the length of
    the string
  - For example, if start is -3, treat it as strLength - 3.
- The length argument is the maximum length of the desired substring
  - If length exceeds the number of characters available, just use the available
    characters.

- input: string, 2 numbers
- return: string

- convert negative starts to proper start index
- convert too long/negative ends to the proper end index
- initialize variable substring, assigned to empty string
- use a for loop to add indicated letters to substring
- return substring
*/

function substr(string, start, length) {
  if (start < 0) start = string.length + start;
  if (string.length + length < 0) {
    length = 0;
  } else if (length < 0 && (string.length + length >= 0)) {
    length = string.length + length;
  } else if ((string.length - 1) < (start + length)) {
    length = string.length - start;
  }

  let substring = ''
  for (let counter = 0; counter < length; ++counter) {
    let index = start + counter
    substring += string[index];
  }
  return substring
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""