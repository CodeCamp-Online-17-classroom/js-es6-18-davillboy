// write code here
function checkAge(user) {
  const { firstName, lastName, age } = user;

  if (age > 18) {
    console.log(`Hello, ${firstName} ${lastName}!`);
  } else {
    console.log(`Access denied: You are not eligible to use this service.`);
  }
}

const firstNameInput = prompt("Enter your first name:");
const lastNameInput = prompt("Enter your last name:");
const ageInput = prompt("Enter your age:");

const user = {
  firstName: firstNameInput,
  lastName: lastNameInput,
  age: parseInt(ageInput) 
};

checkAge(user);
