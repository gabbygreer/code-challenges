// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    //add the two angles together and subtract from 180
    //return that value
    let thirdAngleEquals = 180 - (a + b)
    return thirdAngleEquals
  }
  
  //p: two interior angles of triangle - in degrees - only positive integers
  //r: the third angle 
  //ex: a = 90 b=45 so third angle would equal 45