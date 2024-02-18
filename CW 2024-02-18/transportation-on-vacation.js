// DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let dailyCost = 40
    
      if(d >= 7){
        return (d * dailyCost) - 50
      }else if(d >= 3){
        return (d * dailyCost) - 20
      }else {
        return d * dailyCost
      }
  }
  
  
  //parameters - # of days - appears it will always be a integer
  //return - the total cost for renting the car based on # of days
  
  //pseudocode
  //variable for daily car cost
  //rent total with discount for 7 days or more
  //rent total with discount for 3 or more days