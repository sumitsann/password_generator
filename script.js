// Assignment code here

//functions to generate random characters of each types

function generateRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function generateRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function generateRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function generateRandomCharacter() {
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

//create generate pssword function
function generatePassword() {
  //prompt the user for password length between 8-128

  var passwordLength = prompt(
    "How many characters does your password contain?"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    const hasLowercase = confirm(
      "Does your password have lower case character?"
    );
    const hasUppercase = confirm(
      "Does your password have lower case character?"
    );
    const hasNumber = confirm("Does your password have lower case character?");
    const hasSpecialCharacter = confirm(
      "Does your password have lower case character?"
    );

    const pwTypesArray = [
      { hasLowercase },
      { hasUppercase },
      { hasNumber },
      { hasSpecialCharacter },
    ].filter((item) => Object.values(item)[0]);
    console.log(pwTypesArray);
    if (pwTypesArray.length >= 1) {
      for (let i = 0; i < passwordLength; i += pwTypesArray.length) {}
    } else {
      alert("You must check at least one password type");
      location.reload();
    }
  } else {
    alert("You must enter a value between 8 and 128");
    location.reload();
  }

  return;
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
