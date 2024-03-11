// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let arr = []
    while(a <= b) {
      arr.push(a)
      a++
    }
    return arr
  }
  
  //p: two integers (a,b)
  //r: an array of intgers between a and b
  
  //steps: use a while loop to crete an array from a to b