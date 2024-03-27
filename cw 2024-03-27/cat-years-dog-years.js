// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


let humanYearsCatYearsDogYears = function(humanYears) {
    catYears = (humanYears) => {
      if(humanYears === 1) {
        return 15
      }else if(humanYears === 2) {
        return 24
      }else {
        return 4 * (humanYears - 2) + (15 + 9)
      }
  
    }
    
    dogYears = (humanYears) => {
      if(humanYears === 1) {
        return 15
      }else if(humanYears === 2) {
        return 24
      }else {
        return 5 * (humanYears - 2) + (15 + 9)
      }
    }
  
    return [humanYears, catYears(humanYears), dogYears(humanYears)]
  }
  
  
  //p: human years always >= 1, whole number
  //r: and array of human years, catyears, dog years
  
  //create function to find cat value and one to find dog value
  //add all three values to an array and return