const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll(".button");

let firstValue = 0;
let operator = "";
let waitingForSecondValue = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      display.textContent = "";
      firstValue = 0;
      waitingForSecondValue = false;
      operator = "";
      return;
    }

    if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      operator = buttonText;
      firstValue = parseFloat(display.textContent);
      waitingForSecondValue = true;
      return;
    }

    if (buttonText === "=") {
      const secondValue = parseFloat(display.textContent);
      let result;

      if (operator === "+") {
        result = firstValue + secondValue;
      } else if (operator === "-") {
        result = firstValue - secondValue;
      } else if (operator === "*") {
        result = firstValue * secondValue;
      } else if (operator === "/") {
        result = firstValue / secondValue;
      }

      display.textContent = result;
      firstValue = result;
      waitingForSecondValue = false;
      operator = "";
      return;
    }

    if (waitingForSecondValue) {
      display.textContent = buttonText;
      waitingForSecondValue = false;
    } else {
      display.textContent += buttonText;
    }
  });
});
