// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
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
  function createBoxes(amount) {
    let markup = '';
    for (let i = 0; i < amount; i += 1) {
      markup += `<div style = "background-color: ${getRandomHexColor()}"  width = "${
        30 + i * 10
      }" height = "${30 + i * 10}" ></div>`;
    }
    elements.boxesContainer.insertAdjacentHTML('beforeend', markup);
  }
}

elements.buttonDestroy.addEventListener('click', handlerClickDestroy);

function handlerClickDestroy() {
  elements.boxesContainer.innerHTML = '';
}
