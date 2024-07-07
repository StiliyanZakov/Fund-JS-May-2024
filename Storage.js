function storage(input) {
  // Create a new Map to store items and their quantities
  const itemsMap = new Map();

  // Loop through each item in the input array
  input.forEach((item) => {
    // Split the item string into product and quantity
    const [product, quantity] = item.split(" ");

    // Convert quantity to a number
    const qty = Number(quantity);

    // Check if the map already has the product
    if (!itemsMap.has(product)) {
      // If not, set the product with the given quantity
      itemsMap.set(product, qty);
    } else {
      // If it does, get the existing quantity, add the new quantity, and update the map
      const existingQty = itemsMap.get(product);
      itemsMap.set(product, existingQty + qty);
    }
  });

  // Print the result
  for (const [product, quantity] of itemsMap) {
    console.log(`${product} -> ${quantity}`);
  }
}

// Example usage
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
//storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
