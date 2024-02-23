// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    //convert n to array
    //sort the array
    //convert array to string
    //return string
    return Number(n.toString().split('').sort((a,b)=> a-b).reverse().join('')) 
  }
  
  //p: non-negative integer
  //r: digits of integer in descending order