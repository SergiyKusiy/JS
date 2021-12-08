const searchBtn = document.querySelector('.search__btn');
const inputText = document.querySelector('.search__input');
searchBtn.addEventListener('click', () => {
  console.log(inputText.value);
});
