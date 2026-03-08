let email = prompt("Enter your email address:");
let atPosition = email.indexOf("@");
let domain = email.slice(atPosition + 1);
let newEmail = email.replace("gmail", "company");
alert("Position of @ : " + atPosition);
alert("Domain: " + domain);
alert("Updated Email: " + newEmail);
