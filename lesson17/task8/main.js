export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const array = fullName.split(' ');
    // eslint-disable-next-line prefer-destructuring
    this.firstName = array[0];
    // eslint-disable-next-line prefer-destructuring
    this.lastName = array[1];
  },
};
console.log(user.getFullName());

console.log(user.setFullName('Roman Hrynko'));
console.log(user.firstName);
console.log(user.lastName);
