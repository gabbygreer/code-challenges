// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let numOfXs = ''
    let numOfOs = ''
    for (let i = 0; i <str.length; i++) {
      if(str[i].toLowerCase() === 'x') {
        numOfXs += str[i]
      }else if (str[i].toLowerCase() === 'o') {
        numOfOs += str[i]
      }
    }
    return numOfXs.length === numOfOs.length
  }
  
  //p: string of any character 
  //r: true or false # of x's === # of o's
  
  //steps:
  //create variable for # of x's and # of o's
  //use for loop to convert to lower case check for value and count 
  //return boolean
  
