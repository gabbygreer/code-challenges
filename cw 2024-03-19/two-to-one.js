// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let s3 = s1.concat(s2)
    let array = s3.split('').sort()
    let noRepeat = [...new Set(array)]
    return noRepeat.join('')
  }
  
  //p: two string of letters
  //r: string of letters no repeat
  
  //steps: combine two strings. 
  //convert string to array
  //sort the array
  //filter out repeats 
  ////convert array to string and return