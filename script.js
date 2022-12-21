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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

