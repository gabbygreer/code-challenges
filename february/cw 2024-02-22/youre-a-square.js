// Task
// Given an integral number, determine if it's a square number:

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

let isSquare = function(n){
    //find square root of n
    //return true or false
    return Math.sqrt(n) % 1 === 0; 
  }
  
  //p: always an integet - can be negative
  //r: true or false - is the given number a perfect square