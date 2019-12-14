let arrayOfNumbers = [28, 12, 6, 2, 14, 12,];
let sum;
let max;
let min;
function sumOfTwo(arrayOfNums) {
         max = Math.max(...arrayOfNums);
         min = Math.min(...arrayOfNums);
         sum = min + max;
   return sum;
}
console.log(sumOfTwo(arrayOfNumbers));
