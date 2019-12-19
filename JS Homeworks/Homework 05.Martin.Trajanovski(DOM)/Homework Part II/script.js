let titleDiv = document.getElementById("title");
let resultDiv = document.getElementById("result");
let arrayOfNumbers = [1, 34, 45, 786, 999];
let sum = 0;
let equation = ' ';
function printNumbers(numbers, element, secondElement) {
    secondElement.innerHTML = "";
    secondElement.innerHTML += `<h1>Printing the sum of all numbers in an array</h1>`
    element.innerHTML = "";
    element.innerHTML += `<ul>`
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        element.innerHTML += `<li>${numbers[i]}</li>`
        if (i !== numbers.length - 1) {
            equation += `${numbers[i]} + `;
        } else {
            equation += `${numbers[numbers.length - 1]}`
        }
    }
    element.innerHTML += `</ul><br>`
    element.innerHTML += `<text>The sum of all numbers in the array is: ${sum}.</text>`;
    element.innerHTML += `<p>(${equation}) = ${sum}</p>`;
}
printNumbers(arrayOfNumbers, resultDiv, titleDiv);
