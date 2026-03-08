let categories = ["Electronics", ["Laptop", "Mobile"], ["TV", ["LED", "OLED"]]];
let flatArray = categories.flat(2);
flatArray.sort();
console.log("Sorted Categories:");
flatArray.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
});