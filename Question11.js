const calculateSum = (...numbers) => {
    let sum = numbers.reduce((total, num) => total + num, 0);

    return sum;
};
let result = calculateSum(10, 20, 30, 40, 50);
console.log("Sum of numbers:", result);