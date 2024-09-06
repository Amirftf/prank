// declaring the essential variables
var calcButtons, clearButton, solveButton, calcScreen, calcResult;

calcScreen = document.querySelector(".calc-screen");
calcButtons = document.querySelectorAll(".calc-btn");
clearButton = document.querySelector(".clear-btn");
solveButton = document.querySelector(".solve-btn");

calcButtons.forEach(function (calcButton) {
  calcButton.onclick = function () {
    calcScreen.value += calcButton.value;
  };
});

clearButton.onclick = function () {
  calcScreen.value = "";
};

solveButton.onclick = function () {
  calcResult = eval(calcScreen.value);
  calcScreen.value = calcResult;
};