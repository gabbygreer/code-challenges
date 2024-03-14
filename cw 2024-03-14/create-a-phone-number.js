// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';
  
      numbers.forEach(item => {
          format = format.replace('x', item);
      });
  
      return format;
  }
  
  //p: array of 10 integers - will there always be 10?
  //r: integers as a string in phone number format
  
  //steps: create variable for number format
  //loop through array with forEach and set format equal to repalcing x's in format with items from array


  
// This was my first solution. It felt elementary but it was all that came to mind
// function createPhoneNumber(numbers){
//     return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
//   }
  
  //p: array of 10 integers - will there always be 10?
  //r: integers as a string in phone number format
  
  //steps: assign indexes to spots in a string