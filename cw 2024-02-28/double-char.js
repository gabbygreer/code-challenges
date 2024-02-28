// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
    //turn string into array
    //duplicate each index
    //array to string
    return str.split('').map(s => s.repeat(2)).join('')
  }
  
  //p: string
  //r: strings with each character from string repeated - case-sensitive