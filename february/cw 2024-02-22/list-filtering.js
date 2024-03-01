// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    //filter out strings
    //return array of integers
    return l.filter(str => typeof str != 'string' && str >=0)
  }
  
  //p: array of numbers and strings - numbers are integers & not negative
  //r: array without the strings
  