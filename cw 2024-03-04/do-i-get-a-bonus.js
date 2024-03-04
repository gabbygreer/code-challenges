// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
    //write conditional if bonus is true or false
    //return salary or salary with bonus
    if(bonus === true) {
      return '\u00A3' + salary * 10
    }else {
      return '\u00A3' + salary
    }
  }
  
  //p: salary: is an integer - bonus: boolean - bonus = true then * by 10 - if false return only salary
  //r: salary with currency symbol or salary + bonus with currency symbol