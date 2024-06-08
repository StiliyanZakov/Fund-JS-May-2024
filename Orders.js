function orders (product, quantity) {
    let pricePerUnit;

    switch (product) {
        case "coffee":
            pricePerUnit = 1.50;
            break;
        case "water":
            pricePerUnit = 1.00;
            break;
        case "coke":
            pricePerUnit = 1.40;
            break;
        case "snacks":
            pricePerUnit = 2.00;
            break;
        default:
            console.log("Unknown product");
            return;
    }

    let totalPrice = pricePerUnit * quantity;
    console.log(totalPrice.toFixed(2));
}


orders("water", 5);
orders("coffee", 2);