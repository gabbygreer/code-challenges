// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
    //check if equal
    //if equal return square if !equal return perimeter
    return ( l === w ) == true ? l*w : (2*l) + (2 * w)
  };
  
  //p: length and width - are params always numbers, are they integers. I'll assume they're positive
  //r: area if square perimeter if rectangle
  
  //notes: area = l * w perimeter = 2l + 2w