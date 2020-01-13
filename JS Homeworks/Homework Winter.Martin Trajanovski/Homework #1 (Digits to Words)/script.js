let input = document.getElementById("input");
let resultPara = document.getElementById("result");


let oneToNineteen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function digitstoWords(number) {
    let output;
    if (isNaN(number) || number > 1000000000000) {
        return resultPara.innerText = `Please enter a valid number that is smaller than one trillion`;
    }
    else if (number < 20) {
        output = oneToNineteen[number];
    } else if (number < 100) {
        output = tens[Math.floor((number / 10))];
        if (number % 10) {
            output += "-" + oneToNineteen[number % 10];
        }
    } else if (number < 1000) {
        output = oneToNineteen[Math.floor(number / 100)] + " hundred " + digitstoWords(number % 100);
    } else if (number < 10000) {
        output = oneToNineteen[Math.floor(number / 1000)] + " thousand " + digitstoWords(number % 1000);
    } else if (number < 1000000) {
        output = digitstoWords(Math.floor(number / 1000)) + " thousand " + digitstoWords(number % 1000);
    } else if (number < 1000000000) {
        output = digitstoWords(Math.floor(number / 1000000)) + " million " + digitstoWords(number % 1000000);
    } else if (number < 1000000000000) {
        output = digitstoWords(Math.floor(number / 1000000000)) + " billion " + digitstoWords(number % 1000000000);
    } 
    if (number < 0) {
        number = number * -1;
        let negativeNumber = `negative ${digitstoWords(number)}`;
        output = negativeNumber;
    }
    return resultPara.innerText = output;
}

input.addEventListener("keyup", function (e) {
    e.preventDefault();
    digitstoWords(input.value);
})