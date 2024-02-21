//DIRECTIONS
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return String(s.replace(/!/gi, ''));
  }
  
  //p: s = a string - is it always a string? 
  //r: the string without any exclamation marks
  //ex: 'Hello World!' should return 'Hello World' 