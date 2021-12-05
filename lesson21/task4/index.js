function getTitle() {
  return document.querySelector('.title').textContent;
}
function getDescription() {
  return document.querySelector('.about').innerText;
}
function getPlans() {
  return document.querySelector('.plans').innerHTML;
}
function getGoal() {
  return document.querySelector('.goal').outerHTML;
}
console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
