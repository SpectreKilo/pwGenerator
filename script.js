// Assignment Code
// Character Variables
var lower = "abcdefghijklmnopqrstuvwxyz"
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!@#$%^&*()-_=+]}[{':;/?.>,<"
var numbers = "1234567890"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Use prompts to determine password characteristics
function generatePassword(){
  // Length prompt to determine how many characters the pw will be.
  var pwLength = prompt("How many characters do you want the password to be?")
  console.log("Desired length: " + pwLength + " characters.");

  if (pwLength >=8 && pwLength <=128) {
    var allCharacters = "";
    var generatedPw = "";

    // lowercase Characters?
    var lowercaseChar = confirm("Would you like to include lowercase characters?")

    if (lowercaseChar == true){
      console.log("Lowercase characters included in password");
      // += used to add variables together https://www.w3schools.com/js/js_operators.asp
      allCharacters += lower;
      // Math.random() used with Math.floor() can be used to return random integers. https://www.w3schools.com/js/js_random.asp 
      generatedPw += lower[Math.floor(Math.random() * lower.length)];
    }

    else {
      console.log("No lowercase characters included in password")
    }

    // uppercase Characters?
    var uppercaseChar = confirm("Would you like to include uppercase characters?")

      if (uppercaseChar == true) {
        console.log("Uppercase characters included in password.");
        allCharacters += UPPER
          generatedPw += UPPER[Math.floor(Math.random() * UPPER.length)];
      }

      else {
        console.log("No uppercase characters included in password.")
      }

      // numeric Characters?
      var numericChar = confirm("Would you like to include numeric characters?")

        if(numericChar == true) {
          console.log("Numeric characters included in password.");
          allCharacters += numbers
          generatedPw += numbers[Math.floor(Math.random() * numbers.length)];
        }

        else {
          console.log("No numeric characters included in password.")
        }
        
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

