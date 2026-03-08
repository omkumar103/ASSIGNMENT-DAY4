let student = {
    name: "Om Kumar",
    marks: 85,

    displayInfo: function() {
        console.log("My name is " + this.name + " and my marks are " + this.marks);
    }
};
student.displayInfo();