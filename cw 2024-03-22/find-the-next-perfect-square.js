// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples:(Input --> Output)

function findNextSquare(sq) {
    let root = Math.sqrt(sq)
    if(Number.isInteger(root)) {
      return (root + 1)**2
    }else {
      return -1
    }
  }
  
  //p: integer that is a perfect square
  //r: the next perfect square is sq is perfect square else -1
  
  //steps: check is sq is perfect square by getting square root
  //if perfect take root add one and multiply by itself