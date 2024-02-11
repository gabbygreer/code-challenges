// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    let count = ''
    for(i = 0; i < num; i++){
      count += (i + 1) + ' sheep...'
    }
    return count
  }
  
  //create a counter. Repeat string until counter = num
  //return repeated string