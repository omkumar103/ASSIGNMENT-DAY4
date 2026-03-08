let orders = [200, 450, 300, 150];
let totalBill = orders.reduce((total, price) => total + price, 0);
let ordersWithTax = orders.map(price => price + price * 0.10);
alert("Total Bill: ₹" + totalBill);
alert("Orders with 10% Tax: " + ordersWithTax.join(", "));
