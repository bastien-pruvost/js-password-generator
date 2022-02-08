const passwordLength = document.querySelector("#password-length");
const displayLength = document.querySelector("#display-password-length");

// Link password length range with password length displayer
passwordLength.addEventListener("input", function showSliderValue() {
  displayLength.value = this.value;
});


