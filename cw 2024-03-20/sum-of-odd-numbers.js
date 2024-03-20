// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	return n**3
}

//p: row number - always positive integer - index starts at 1
//r: sum of odd numbers in given row

//steps: Mathematically, the sum of the nth line of odd numbers is n3