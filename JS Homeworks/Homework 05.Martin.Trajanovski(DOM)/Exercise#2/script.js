let titleDiv = document.getElementById("header");
let contentDiv = document.getElementById("content");
let userInput = prompt("How much you weigh?");
let kilos = parseInt(userInput);

function weightCalculator (weight, element, secondElement) {
    if (!Number.isNaN(weight) && weight > 0) {
        element.innerHTML = "";
        element.innerHTML = `<h1>Find out how much you weigh in chickens!</h1>`;
        let chickenWeight = weight / 0.5;
        secondElement.innerHTML = "";
        secondElement.innerHTML = `<p>You weigh ${chickenWeight} chickens!</p>`;
    } else {
        element.innerHTML = "";
        element.innerHTML = `<h1>Please enter a valid weight!</h1>`;
    }
}
weightCalculator (kilos, titleDiv, contentDiv);