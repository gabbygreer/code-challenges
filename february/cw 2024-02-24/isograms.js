// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    //make string lowercase
    //turn string to array
    //map array checking for repeat
    //return true or false
    const chars = [];
    for (let i = 0; i < str.length; i++) {
      const newChar = str[i].toLowerCase();
      if(chars.find(char => char === newChar)) {
        return false
      }
      chars.push(newChar);
    }
    return true;
  }
  
  //p: string - only letters - empty string is isogram - are there capitols?
  //r: true or false - is isogram or no? 
  //ex: "funny" = false, "ambidextrously" = true