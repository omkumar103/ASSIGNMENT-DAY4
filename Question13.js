let product = {
    id: 1,
    name: "Laptop",
    price: 50000
};
Object.freeze(product);
product.price = 60000;
if (product.price === 60000) {
    console.log("Modification worked.");
} else {
    console.log("Modification did NOT work because the object is frozen.");
}
console.log("Product Object:", product);