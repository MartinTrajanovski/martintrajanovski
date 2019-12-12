let userInput = prompt("If you want to convert Celsius to Fahrenheit press C, otherwise press F.");
let temp = Number(prompt("Enter the temperature."));
function celToFah (celsius) {
    let result = celsius * 1.8 + 32;
    return result;
}
function fahToCel (fahrenheit) {
    let result = (5/9) * (fahrenheit - 32);
    return result;
}
if (userInput === "C") {
    console.log(celToFah(temp));
} else if (userInput === "F") {
    console.log(fahToCel(temp));
} else {
    console.log("Please enter either F or C")
}