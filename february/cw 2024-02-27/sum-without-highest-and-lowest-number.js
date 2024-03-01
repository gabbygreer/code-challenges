// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    //if statement for empty or 1 element
    if (!array) {
      return 0
    }
    //sort array from lowest to highest
    let sortedArray = array.sort((a, b) => a - b)
    
    //get rid of first and last index
    let slicedArray = array.slice(1, -1)
    //sum the array
    return slicedArray.reduce((total, current) => total += current, 0)
  }
  
  //p: array of integers - can be negative
  //r: sum of the array - if empty or only 1 element return 0