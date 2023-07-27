const elements = {
  incrementButton: document.querySelector('[data-action=increment]'),
  decrementButton: document.querySelector('[data-action=decrement]'),
  value: document.querySelector('#value'),
};

elements.incrementButton.addEventListener('click', handlerIncrementButton);
let counterValue = 0;
function handlerIncrementButton() {
  counterValue += 1;
  elements.value.textContent = counterValue;
}

elements.decrementButton.addEventListener('click', handlerDecrementButton);
function handlerDecrementButton() {
  counterValue -= 1;
  elements.value.textContent = counterValue;
}
