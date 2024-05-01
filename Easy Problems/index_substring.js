// Write two functions that each take two strings as arguments:

// The indexOf function searches for the first instance of a substring in
  // firstString that matches the string secondString, and returns the index of
  // the character where that substring begins.
// The lastIndexOf function searches for the last instance of a substring in
  // firstString that matches the string secondString, and returns the index of
  // the character where that substring begins.

//Both functions return -1 if firstString does not contain the substring specified by secondString.

//input: two strings
//output: none
//return: number

// indexOf function:
// nested for loop
  // outloop: keep track of current index
  // innerloop: see if from starting letter, whole substring matches


function indexOf(firstString, secondString) {
  for (let firstIndex = 0; firstIndex < firstString.length; firstIndex++) {
    let substring = true
    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex++) {
      if (firstString[firstIndex + secondIndex] == secondString[secondIndex]) {
        continue
      }
      else {
        substring = false
        break
      }
    }
    if (substring) return firstIndex;
  }

  return -1

//  return firstString.indexOf(secondString);
}

function lastIndexOf(firstString, secondString) {
  let firstReverse = firstString.split("").reverse().join("");
  let secondReverse = secondString.split("").reverse().join("");
  let reverseIndex = indexOf(firstReverse, secondReverse)

  if (reverseIndex === -1) return -1
  return (firstString.length) - reverseIndex - secondReverse.length;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                     // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1