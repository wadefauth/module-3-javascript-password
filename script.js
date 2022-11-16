// Assignment Code
var generateBtn = document.querySelector("#generate");
// based from the answer, we filter our selections
var lowerSet = [
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
var upperSet = [
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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = [
  "!",
  "@",
  "#",
  "@",
  "%",
  "+",
  "\\",
  "/",
  "!",
  "#",
  "$",
  "^",
  "?,",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

function generatePassword() {
  // ask the questions
  var passwordLength = prompt("How many characters you want for the password?");

  var includeLowercase = confirm("Do you want to include lowercase?");
  var includeUppercase = confirm("Do you want to include uppercase?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");

  var selection = [];

  //create object to store user input
  var passwordOptions = {
    passwordLength: passwordLength,
    includeNumbers: includeNumbers,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeSpecial: includeSpecial,
  };
  // conditional statements
  if (passwordOptions.includeLowercase === true) {
    // var lowerSetchar = lowerSet[Math.floor(Math.random() * lowerSet.length)]
    selection = selection.concat(lowerSet);
  }
  if (passwordOptions.includeUppercase === true) {
    // var upperSetchar = upperSet[Math.floor(Math.random() * upperSet.length)]
    selection = selection.concat(upperSet);
  }
  if (passwordOptions.includeNumbers === true) {    
    // var number = numbers[Math.floor(Math.random() * numbers.length)]
    selection = selection.concat(numbers);
  }
  if (passwordOptions.includeSpecial === true) {
    // var Specialchar = special[Math.floor(Math.random() * special.length)]
    selection = selection.concat(special);
  }
  // if statement for numbers

  // if statement for special

  console.log(selection);

  var generatedPassword = "";

  // based from selections we generate a random password
  for (i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * selection.length);
    var randomChar = selection[randomNumber];
    generatedPassword = generatedPassword + randomChar;
  }

  // return the generated password
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
