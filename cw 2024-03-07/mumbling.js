// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	return s.split('').map((char, index) => {
    return char.toUpperCase() + char.toLowerCase().repeat(index)
  }).join('-')
}

//p: string
//r: charaters from string separated my hyphns with each letter repeated once more than previous letter. First letter of repeat capitalized
//ex: 'ZpglnRxq' == 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq'

//steps:
//split string to array
//map through and capitalize char and add to char lower-case and repeated based on index
//join with hyphens and return