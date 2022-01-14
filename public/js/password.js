/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/password.js ***!
  \**********************************/
var password = document.getElementById("myInput");
var list = document.querySelector(".focus-password"); // password check

document.addEventListener("click", showList);
password.addEventListener("mouseover", function () {
  list.style.display = "block";
});

function showList() {
  if (password !== document.activeElement) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

getPassword = function getPassword() {
  var text = document.getElementById('password').value;
  var length = document.getElementById('length');
  var lowercase = document.getElementById('lowercase');
  var uppercase = document.getElementById('uppercase');
  var number = document.getElementById('number');
  var special = document.getElementById('special');
  checkIfEightChar(text) ? length.classList.add('list-group-item-success') : length.classList.remove('list-group-item-success');
  checkIfOneLowercase(text) ? lowercase.classList.add('list-group-item-success') : lowercase.classList.remove('list-group-item-success');
  checkIfOneUppercase(text) ? uppercase.classList.add('list-group-item-success') : uppercase.classList.remove('list-group-item-success');
  checkIfOneDigit(text) ? number.classList.add('list-group-item-success') : number.classList.remove('list-group-item-success');
  checkIfOneSpecialChar(text) ? special.classList.add('list-group-item-success') : special.classList.remove('list-group-item-success');
};

function checkIfEightChar(text) {
  return text.length >= 8;
}

function checkIfOneLowercase(text) {
  return /[a-z]/.test(text);
}

function checkIfOneUppercase(text) {
  return /[A-Z]/.test(text);
}

function checkIfOneDigit(text) {
  return /[0-9]/.test(text);
}

function checkIfOneSpecialChar(text) {
  return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text);
} // function togglePassword() {
//     const passInput = document.getElementById('password');
//     const togglePW = document.getElementById('togglePW');
//
//     passInput.type === "password" ? passInput.type = "text" : passInput.type = "password";
//     togglePW.textContent === "Show Password" ? togglePW.textContent = "Hide Password" : togglePW.textContent = "Show Password";
// }
/******/ })()
;