export class Order {
  constructor(price, city, type) {
    this.id = Math.round(Math.random() * 100).toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type.toString();
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const order = new Order(1666, 'Lviv', 'Sell');
console.log(order.checkPrice());
console.log(order.confirmOrder());
console.log(order.isValidType());
console.log(order.id);
console.log(order.dateConfirmed);
console.log(order.isConfirmed);

const order1 = new Order(900, 'Peremozhne', 'Buy');
console.log(order1.checkPrice());
console.log(order1.confirmOrder());
console.log(order1.isValidType());
