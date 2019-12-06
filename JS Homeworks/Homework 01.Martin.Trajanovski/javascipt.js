let phoneWithoutTax = 119.95;
let phoneWithTax;
let tax = 5;
let numberOfPhones = 30;
let totalPrice;
phoneWithTax = phoneWithoutTax + (phoneWithoutTax * (tax / 100));
totalPrice = phoneWithTax * numberOfPhones;
console.log("The total price of 30 phones is " + totalPrice + " dollars!");
