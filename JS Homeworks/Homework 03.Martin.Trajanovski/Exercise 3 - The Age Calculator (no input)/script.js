let today = new Date();
let yearCurrent = today.getFullYear();
function calculateAge(birthYear, yearCurrent) {
    let myAge = yearCurrent - birthYear;
    return myAge;
}
alert(`You are ${calculateAge(1993, yearCurrent)} years old.`);
alert(`You are ${calculateAge(1300, yearCurrent)} years old.`);
alert(`You are ${calculateAge(1987, yearCurrent)} years old.`);

