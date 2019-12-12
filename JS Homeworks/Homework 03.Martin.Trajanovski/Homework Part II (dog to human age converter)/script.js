let userChoice = prompt(`If you would like to calculate your dog's age in dog years press 'D', 
if you would like to calculate your dog's age in human years press 'H'.`);
let dogAge = parseInt(prompt("Please enter the age of your dog."));
function ageConversion(age) {
    if ((userChoice === "D") && (dogAge > 0)) {
        let convertedAge = age * 7;
        return `Your dog's age in dog years is ${convertedAge}.`;
    } else if ((userChoice === "H") && (dogAge > 0)) {
        let convertedAge = age / 7;
        return `Your dog's age in human years is ${convertedAge}.`;
    } else {
        alert("Please enter either 'D' or 'H' and a positive number.");
    }
}
console.log(ageConversion(dogAge));