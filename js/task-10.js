function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const elements = {
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
  input: document.querySelector('input'),
};

elements.input.addEventListener('input', handlerInput);
function handlerInput(evt) {}

elements.buttonCreate.addEventListener('click', handlerClickCreate);
function handlerClickCreate(evt) {
  createBoxes(elements.input.value);
}
function createBoxes(amount) {
  let markup = '';
  for (let i = 0; i < amount; i += 1) {
    markup += `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px;"></div>`;
  }
  elements.boxesContainer.insertAdjacentHTML('beforeend', markup);
  elements.input.value = '';
}

elements.buttonDestroy.addEventListener('click', handlerClickDestroy);

function handlerClickDestroy() {
  elements.boxesContainer.innerHTML = '';
}
