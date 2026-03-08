function showGreeting(message) {
    alert(message);
}
function greetUser(callback) {
    let name = prompt("Enter your name:");
    let createGreeting = (userName) => {
        return "Hello " + userName + "! Welcome.";
    };
    let greeting = createGreeting(name);
    callback(greeting);
}
greetUser(showGreeting);
