let headerDiv = document.getElementById("header");
let contentDiv = document.getElementById("content");
let recipeName = prompt("What will you be making today?");
let userInput = prompt("How many ingredients will you need?");
let numberOfIngredients = parseInt(userInput);
let allIngredients;
let ingredients = [];
for (i = 0; i < numberOfIngredients; i++) {
    allIngredients = prompt("List all the ingredients.");
    ingredients.push(allIngredients);
}
function printRecipeName (name, element) {
    element.innerHTML = "";
    if (name.length >= 2) {
        element.innerHTML += `<header><h1>Today we will be making a ${name}</h1></header>`;
    } else (
        element.innerHTML += `<header><h1>Please enter a valid name of the recipe.</h1></header`
    )
}
function printIngredients (listOfIngredients, element) {   
    element.innerHTML = "";
    element.innerHTML += `<h2>List of ingredients:</h2><ol>`;
    element.innerHTML += `<ol>`;
    for (i = 0; i < listOfIngredients.length; i++) {
        element.innerHTML += `<li>${listOfIngredients[i]}</li>`;
    }
    element.innerHTML += `</ol>`;
}
printRecipeName (recipeName, headerDiv);
printIngredients(ingredients, contentDiv);