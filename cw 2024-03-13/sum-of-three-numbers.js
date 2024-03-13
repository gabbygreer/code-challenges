// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b)
{
   if(a === b) {
     return a
   }else if(a < b) {
     let sum = 0
     for(let i = a; i <= b; i++) {
       sum += i
     }
     return sum
   }else{
     let sum = 0
     for(let i = b; i <= a; i++) {
       sum +=i
     }
     return sum
   }
  
}

//p: two numbers - can be negative - not ordered
//r: the sum of a & b and numbers inbetween - if same return number

//steps: 
//compare if a & b are equal
//order a and b 
//create an array with a and b an numbers inbetween
//sum the array and return value
