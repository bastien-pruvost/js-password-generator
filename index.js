const passwordLength = document.getElementById("password-length");
const displayLength = document.getElementById("display-password-length");
const generateButton = document.querySelector(".generateButton");
const rangeValue = document.getElementById("password-length");
const copyButton = document.getElementById("copy");
const copiedNotif = document.querySelector(".copied");

const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'(-èçà)=^$*;:!?/§%µ£+}]@\\`[{#~";
const passwordOutput = document.getElementById("password-output");

const minRandom = 0;
let maxRandom = 1;

// Link password length range with password length displayer
passwordLength.addEventListener("input", function showSliderValue() {
  displayLength.value = this.value;
});

// Function to get a random number between min and man
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Function to copy in the clipboard
function copyToClipboard() {
  navigator.clipboard.writeText(passwordOutput.value);
}

// Function to generate a password depending on the types of characters checked
function generatePassword() {
  let data = [];
  let password = "";

  // Add selected characters to an array
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  // Warn if no character types are checked
  if (data.length === 0) {
    passwordOutput.value = "Please select caracters types above";
    return;
  }
  // Set the range of the random number depending on the size of the array
  maxRandom = data.length;

  // Increments the password according to the number of characters chosen
  for (i = 0; i < rangeValue.value; i++) {
    password += data[getRandomBetween(minRandom, maxRandom)];
  }
  // Show password
  passwordOutput.value = password;
};

// Generate the password when generate button is clicked
generateButton.addEventListener("click", () => {
  generatePassword();
});

// Copy to clipboard when copy button is clicked
copyButton.addEventListener("click", () => {
  copyToClipboard();
  copiedNotif.style.opacity = "1";
  copiedNotif.style.transform = "translateY(-50%)";
  setTimeout(() => {
    copiedNotif.style.opacity = "0";
    copiedNotif.style.transform = "translateY(20%)";
  }, 2000);
});