const input = document.querySelector('#validation-input');
input.addEventListener('blur', handlerInput);

function handlerInput(evt) {
  if (
    evt.currentTarget.value.length ===
    Number(evt.currentTarget.getAttribute('data-length'))
  ) {
    evt.currentTarget.classList.add('valid');
    return;
  }
  evt.currentTarget.classList.add('invalid');
}
