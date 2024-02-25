// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//get our team scores
//loop scores
//add scores
//return total

function points(games) {
    let totalPoints = 0;
    games.map(game => {
      if(game[0] === game[2]) {
        totalPoints += 1;
      } else if(game[0] > game[2]) {
        totalPoints += 3
      }
    });
    return totalPoints
  }
  
  //p: x = our team y = opponents - given array of strings ['x:y']
  //r: number that is the sum of championship games points