const elements = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

elements.input.addEventListener('input', handlerInput);

function handlerInput(evt) {
  if (evt.currentTarget.value !== '') {
    elements.span.textContent = evt.currentTarget.value;
  } else {
    elements.span.textContent = 'Anonymous';
  }
}
