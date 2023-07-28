const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  if (email.value === '') {
    alert('Поле email повинно бути заповнено!');
  }
  if (password.value === '') {
    alert('Поле password повинно бути заповнено!');
  }

  const objForm = {
    email: email.value,
    password: password.value,
  };
  console.log(objForm);

  evt.currentTarget.reset();
}
