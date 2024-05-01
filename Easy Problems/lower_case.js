/*
- Write a function that returns a string converted to lowercase.
- To convert a single uppercase character to a lowercase character, get its
  ASCII numeric representation from the ASCII table, add 32 to that number, then
  convert the number back to a character using the same ASCII table
- You can use the String.fromCharCode and the String.charCodeAt methods

input: string
return: string

- initialize variable lowercaseString, set to an empty string
- using a for loop, iterate over each letter in the string, adding the lowercase
  version to lowercaseString
- return lowercaseString

- check is ascii is between 65 and 90

*/

function toLowerCase(string) {
  let lowercaseString = '';
  for (let counter = 0; counter < string.length; ++counter) {
    let ascii = string[counter].charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      lowercaseString += String.fromCharCode(ascii + 32);
    } else {
      lowercaseString += String.fromCharCode(ascii);
    }
  }
  return lowercaseString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"