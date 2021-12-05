export function finishForm() {
  const formElem = document.querySelector('.login-form');
  const inputPassword = document.querySelector('input[name = "password"]');

  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  formElem.prepend(inputElem);

  // eslint-disable-next-line no-undef
  inputPassword.setAttribute('type', 'password');
}
