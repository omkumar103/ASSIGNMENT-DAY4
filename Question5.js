let cart = [];
cart.push("Laptop");
cart.push("Headphones");
cart.push("Mouse");

console.log("Cart after push:", cart);
cart.unshift("Charger");

console.log("Cart after unshift:", cart);
cart.shift();

console.log("Cart after shift:", cart);
let index = cart.indexOf("Headphones");
if (index !== -1) {
    cart.splice(index, 1);
}

console.log("Cart after removing specific item:", cart);
console.log("Final Shopping Cart:");
cart.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
});