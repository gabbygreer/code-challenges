// DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++)
      z.push(x * i);
    return z;
  }
  
  //x = the amount of times you count
  //n = the amount you count by
  // return an array of the multiples
  //create a function that starts at x and adds a number to the array at each multiple of n
  //need to loop through the array