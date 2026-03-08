let names = ["  om", "  rahul ", " ankit  ", "  priya "] ;
let formattedNames = names.map(function(name) {
    
    let trimmedName = name.trim();
    
    let properName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
    
    return properName;
});
console.log("Formatted Names:", formattedNames);