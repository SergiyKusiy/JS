export function getTitle() {
  return document.querySelector('.title').textContent;
}
<<<<<<< HEAD

export function getDescription() {
  return document.querySelector('.about').innerText;
}

export function getPlans() {
  return document.querySelector('.plans').innerHTML;
}

=======
export function getDescription() {
  return document.querySelector('.about').innerText;
}
export function getPlans() {
  return document.querySelector('.plans').innerHTML;
}
>>>>>>> 6c5dee87dd34b4371e9a9afb4d6aa2b559368e4f
export function getGoal() {
  return document.querySelector('.goal').outerHTML;
}

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
