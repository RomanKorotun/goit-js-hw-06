function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
};

elements.btn.addEventListener('click', handlerClick);

function handlerClick() {
  elements.body.style.backgroundColor = getRandomHexColor();
  elements.span.textContent = getRandomHexColor();
}
