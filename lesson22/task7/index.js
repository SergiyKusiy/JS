const btnElem = document.querySelectorAll('.btn');

function handleClick() {
  console.log(event.target.textContent);
}

// eslint-disable-next-line array-callback-return
btnElem.forEach(elem => {
  elem.addEventListener('click', handleClick);
});
