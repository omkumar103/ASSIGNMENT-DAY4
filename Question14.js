let user = {
    id: 1,
    name: "Om",
    age: 21
};
Object.seal(user);
user.email = "om@example.com"; 
user.age = 22;   
delete user.name;   
console.log("User Object:", user);
console.log("Is user sealed?", Object.isSealed(user));
