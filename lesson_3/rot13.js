function rot13(string) {
  const ROT_PLACES = 13;
  let rotated = '';

  for (let index = 0; index < string.length; ++index) {
    let charCode = string.charCodeAt(index);
    let newCharCode = rotateCharCode(charCode, ROT_PLACES);
    rotated += String.fromCharCode(newCharCode);
  }

  return rotated;
}

function rotateCharCode(charCode, rot) {
  const MIN_UPPER_CODE = 65;
  const MAX_UPPER_CODE = 90;
  const MIN_LOWER_CODE = 97;
  const MAX_LOWER_CODE = 122;

  if (charCode >= MIN_UPPER_CODE && charCode < (MIN_UPPER_CODE + rot)) {
    return charCode + rot;
  } else if (charCode >= (MIN_UPPER_CODE + rot) && charCode <= MAX_UPPER_CODE) {
    return charCode - rot;
  } else if (charCode >= MIN_LOWER_CODE && charCode < (MIN_LOWER_CODE + rot)) {
    return charCode + rot;
  } else if (charCode >= (MIN_LOWER_CODE + rot) && charCode <= MAX_LOWER_CODE) {
    return charCode - rot;
  } else {
    return charCode;
  }
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs: Teachers open the door, but you must enter by yourself.

console.log(rot13(rot13('The quick brown fox jumps over the lazy dog.')))
console.log(rot13(rot13('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')))