const elements = {
  input: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
};

elements.input.addEventListener('input', handlerInput);

function handlerInput(evt) {
  elements.spanEl.style.fontSize = `${evt.currentTarget.value}px`;
}
