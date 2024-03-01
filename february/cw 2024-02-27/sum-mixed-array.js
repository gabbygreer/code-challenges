// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    //make all array values numbers
    //sum numbers
    //return sum
    return x.reduce((prevVal, currVal) => Number(prevVal) + Number(currVal), 0)
  }
  
  
  //p: array of integers as strings and numbers. 
  //r: sum of the values if they were all numbers 
  
  