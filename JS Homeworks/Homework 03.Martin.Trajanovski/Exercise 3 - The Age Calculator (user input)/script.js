let today = new Date();
let yearCurrent = today.getFullYear();
let userInput = prompt("Enter the year of your birth:");
let yearOfBirth = parseInt(userInput);
function calculateAge(birthYear, currentYear) {
    let myAge = currentYear - birthYear;
    return myAge;
}
if ((Number.isNaN(yearOfBirth) || (yearOfBirth <= 0)) || (yearOfBirth > yearCurrent)) {
    alert("Please enter a valid year");
} else {
    calculateAge(yearOfBirth, yearCurrent);
    alert(`You are ${calculateAge(yearOfBirth, yearCurrent)} years old`);
}

