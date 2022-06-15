// Assignment code here
function generatePassword() {
  document.getElementById("generate").click();
}

//arrays to hold characters of each types

const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numericLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialLetters = [
  "+",
  "-",
  "&&",
  "||",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
];

//create generate password function

function generatePassword() {
  var possiblePasswordArray = [];

  var passwordLength = prompt(
    "How many characters does your password contain?"
  );

  //checking if the password length is between 8 and 128
  if (passwordLength >= 8 && passwordLength <= 128) {
    //checking what types of characters should the password contain
    const hasLowercase = confirm(
      "Does your password have lower case character?"
    );
    if (hasLowercase == true) {
      possiblePasswordArray = possiblePasswordArray.concat(lowerCaseLetters);
    }
    var hasUppercase = confirm("Does your password have upper case character?");
    if (hasUppercase == true) {
      possiblePasswordArray = possiblePasswordArray.concat(upperCaseLetters);
    }

    var hasNumber = confirm("Does your password have numeric character?");
    if (hasUppercase == true) {
      possiblePasswordArray = possiblePasswordArray.concat(numericLetters);
    }

    var hasSpecialCharacter = confirm(
      "Does your password have special character?"
    );
    if (hasSpecialCharacter == true) {
      possiblePasswordArray = possiblePasswordArray.concat(specialLetters);
    }
    //if user does not select any kind of characters -- reload the page
    if (!hasLowercase && !hasUppercase && !hasNumber && !hasSpecialCharacter) {
      alert(
        "You must select one at least one type of the character for your password"
      );
      location.reload();
    }
  }
  //if user does not select the number between 8-128 -- reload the page
  else {
    alert("You must enter a value between 8 and 128");
    location.reload();
  }
  var passwordString = "";

  //generate the password randomly from the possible password array
  for (var i = 0; i < passwordLength; i++) {
    var randomLetterIndex = Math.floor(
      Math.random() * possiblePasswordArray.length
    );
    passwordString = passwordString + possiblePasswordArray[randomLetterIndex];
  }

  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
