let company = {
    department: {
        manager: {
            name: "Rahul Sharma"
        }
    }
};
let managerName = company.department?.manager?.name;
console.log("Manager Name:", managerName);
let managerAge = company.department?.manager?.age;
console.log("Manager Age:", managerAge);