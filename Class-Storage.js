class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
    this.totalCost = 0;
  }
  addProduct(productObj) {
    this.storage.push(productObj);
    this.capacity -= productObj.quantity;

    const totalProductPrice = productObj.price * productObj.quantity;
    this.totalCost += totalProductPrice;
  }
  getProducts() {
    const result = [];

    for (const productObj of this.storage) {
      result.push(JSON.stringify(productObj));
    }
    return result.join("\n");
  }
}

let productOne = { name: "Cucumber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

// let productOne = {name: 'Tomato',
//     price: 0.90, quantity: 19};
//     let productTwo = {name: 'Potato',
//     price: 1.10, quantity: 10};
//     let storage = new Storage(30);
//     storage.addProduct(productOne);
//     storage.addProduct(productTwo);
//     console.log(storage.totalCost);
