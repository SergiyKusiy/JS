export function finishList() {
  const listElem = document.querySelector('.list');
  const liElem = document.querySelector('.special');

  const liArr = [1, 4, 6, 8].map(num => {
    const liItem = document.createElement('li');
    liItem.textContent = num;
    return liItem;
  });

  listElem.prepend(liArr[0]);
  liElem.before(liArr[1]);
  liElem.after(liArr[2]);
  listElem.append(liArr[3]);
}
finishList();
