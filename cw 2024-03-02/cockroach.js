// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    //convert km/h to cm/s and round to floor
    //cm/s = km/h ÷ 0.036
    return Math.floor(s / 0.036)
  }
  
  //p: number >= 0 
  //r: integer rounded down to floor