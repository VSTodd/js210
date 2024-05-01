// Write a function that takes a string as an argument, and returns the string
// stripped of spaces from both ends. Do not remove or alter internal spaces.

//input: string
//output: n/a
//return: string

function trim(string) {
  let letters = string.split('').reverse();
  while (letters[0] === ' ') {
    letters.shift();
  }

  letters = letters.reverse();

  while (letters[0] === ' ') {
    letters.shift();
  }

  return letters.join('');
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""