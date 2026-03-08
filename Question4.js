let prices = [1200, 850, 60, 1500, 300];
let discountedPrices = prices.map(price => price - (price * 0.10));
console.log("Prices after 10% discount:", discountedPrices);
let expensiveProduct = prices.find(price => price > 1000);
console.log("First product above ₹1000:", expensiveProduct);
let belowHundred = prices.some(price => price < 100);
console.log("Is any product below ₹100?", belowHundred);
let aboveFifty = prices.every(price => price > 50);
console.log("Are all products above ₹50?", aboveFifty);