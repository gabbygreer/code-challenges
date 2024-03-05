// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(sonYearsOld*2 > dadYearsOld) {
      return (sonYearsOld * 2) - dadYearsOld
    }else {
      return dadYearsOld - (sonYearsOld * 2)
    }
  }
  
  //p: fathers age - integer / son's age - integer
  //r: how many years ago the father was twice as old as his son (or in how many years he will be twice as old)
  //r: greater than 0 
  
  //steps: double the son's age and subract it from father's age
  //if less than zero then double the sons age and subtract the fathers from it