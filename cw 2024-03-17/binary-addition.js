// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    return (a+b).toString(2)
  }


//Explanation from comments because I had no idea how to solve

//var sum = a + b; // this adds the two numbers together
//var binary = sum.toString(2); // this converts the number into a base-2 representation
// the 2 inside the brackets means to convert it into base-2
// base-2 is binary. other common bases include base-8 (octal) and base-16 (hexadecimal)
// sum.toString(16); would convert the number to a hexadecimal string (base-16)
// sum.toString(8); would convert the number to an octal string (base-8)
// sum.toString(2); would convert the number to a binary string (base-2)
//return binary; // this returns the result