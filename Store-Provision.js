function storeProvision(currentStock, orderedProducts) {
  const store = {};

  // Process current stock
  for (let i = 0; i < currentStock.length; i += 2) {
    let product = currentStock[i];
    let quantity = Number(currentStock[i + 1]);
    store[product] = quantity;
  }

  // Process ordered products
  for (let i = 0; i < orderedProducts.length; i += 2) {
    let product = orderedProducts[i];
    let quantity = Number(orderedProducts[i + 1]);
    if (store.hasOwnProperty(product)) {
      store[product] += quantity;
    } else {
      store[product] = quantity;
    }
  }

  // Print the store's inventory
  for (const [product, quantity] of Object.entries(store)) {
    console.log(`${product} -> ${quantity}`);
  }
}

// Examples
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

// storeProvision(
//     ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
// );
