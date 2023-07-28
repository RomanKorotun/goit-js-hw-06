const input = document.querySelector('#validation-input');
input.addEventListener('blur', handlerInput);

// function handlerInput(evt) {
//   if (
//     evt.currentTarget.value.length ===
//     Number(evt.currentTarget.getAttribute('data-length'))
//   ) {
//     evt.currentTarget.classList.remove('invalid');
//     evt.currentTarget.classList.add('valid');
//     return;
//   }

//   evt.currentTarget.classList.remove('valid');
//   evt.currentTarget.classList.add('invalid');
// }

function handlerInput(evt) {
  console.log(evt.currentTarget.value.length);
  if (
    evt.currentTarget.value.length ===
    Number(evt.currentTarget.getAttribute('data-length'))
  ) {
    evt.currentTarget.classList.remove('invalid');
    evt.currentTarget.classList.add('valid');
    return;
  }

  if (evt.currentTarget.value.length === 0) {
    evt.currentTarget.classList.remove('invalid');
    evt.currentTarget.classList.remove('valid');
    return;
  }

  evt.currentTarget.classList.remove('valid');
  evt.currentTarget.classList.add('invalid');
}
