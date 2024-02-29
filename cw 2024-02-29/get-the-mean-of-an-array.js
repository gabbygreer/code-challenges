// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    return Math.floor(marks.reduce((acc, curr) => acc + curr, 0)/marks.length)
    
  }
  
  //p: array of scores. Are they all integers? Are they all positive? Will not be empty
  //r: average of scores in array