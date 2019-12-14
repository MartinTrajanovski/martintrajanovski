let arrayOfNumbers = [1, "Hristo", "Uzunov", 2, 3, 467, 789, 999];
let sum;
let max = -Infinity;
let min = Infinity;
function sumOfTwo(arrayOfNums) {
    for (i = 0; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] < min && typeof arrayOfNums[i] === "number") {
            min = arrayOfNums[i];
        }
        if (arrayOfNums[i] > max && typeof arrayOfNums[i] === "number") {
            max = arrayOfNums[i];
        }
        sum = max + min;
    }
    return sum;
}
console.log(sumOfTwo(arrayOfNumbers));