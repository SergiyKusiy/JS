const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};

console.log(user.fullName);
console.log((user.fullName = 'Serhii Kysii'));
console.log(user.firstName);
console.log(user.firstName);
