// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let splitAndSort = s.split(' ').sort((a,b) => a.length -b.length)
    return splitAndSort[0].length
  }
  
  //p: string of words - won't be empty - don't need to account for data types
  //r: length of shortest word(s)
  
  //steps:
  //split string into array
  //sort array smallest to largest 
  //return 0th[i].length