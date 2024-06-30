function catalogue(products) {
  const productCatalogue = {};

  // Parse the input and populate the catalogue
  products.forEach((productInfo) => {
    const [name, price] = productInfo.split(" : ");
    const initial = name[0].toUpperCase();

    if (!productCatalogue[initial]) {
      productCatalogue[initial] = [];
    }

    productCatalogue[initial].push({ name, price: Number(price) });
  });

  // Sort the catalogue alphabetically by product name within each initial group
  for (const initial in productCatalogue) {
    productCatalogue[initial].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Sort the initials alphabetically
  const sortedInitials = Object.keys(productCatalogue).sort();

  // Print the sorted catalogue
  sortedInitials.forEach((initial) => {
    console.log(initial);
    productCatalogue[initial].forEach((product) => {
      console.log(`  ${product.name}: ${product.price}`);
    });
  });
}

// Examples
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ]);
