// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    return  /^(\d{4}|\d{6})$/.test(pin);
  }
  
  //p: pin - can have numbers, letters and symbols
  //r: true or false is pin 4digits or 6digits === true
  
  //steps: verify pin is only digits
  //check if pin is 4 digits or 6 digits exactly and return true or false