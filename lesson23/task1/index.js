const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorEl = document.querySelector('.error-text_email');
const passwordErrorEl = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(el => el(value))
    .filter(el => el)
    .join(', ');
};

const onEmailChange = event => {
  const validationText = validate('email', event.target.value);
  emailErrorEl.textContent = validationText;
};

const onPasswordChange = event => {
  const validationText2 = validate('password', event.target.value);
  passwordErrorEl.textContent = validationText2;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [name, passw]) => ({ ...acc, [name]: passw }),
    {},
  );
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
