let userChoice = prompt("If you want to convert Celsius to Fahrenheit press 'C', otherwise press 'F'.");
let userInput = prompt("Enter the temperature.");
let temp = Number(userInput);
function temperatureConverter(degrees) {
    if ((userChoice === "C")  && !(Number.isNaN(temp))) {
        let result = degrees * 1.8 + 32;
        return `${degrees} °C is ${result} °F.`;
    } else if ((userChoice === "F") && !(Number.isNaN(temp))) {
        let result = (5 / 9) * (degrees - 32);
        return `${degrees} °F is ${result} °C.`;
    } else {
        console.log("Please enter either 'C' or 'F' and a valid number!")
    }
}
console.log(temperatureConverter(temp));

