// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let array = numbers.split(' ').sort((a, b) => a-b);
    return String(array[array.length - 1] + ' ' + array[0] )
  }
  
  
  //param - string of nums - separated by space - all int - at least 1 num
  //return string - at least 2 num - separated by space - highest first
  //pseudo - make array / order / get 0th index / get last index /