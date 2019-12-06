let myYearOfBirth = prompt("Please enter the year of your birth:");
myYearOfBirth = Number(myYearOfBirth);
let mySign =  (myYearOfBirth - 4) % 12;
if(Number.isNaN(mySign)) {
    console.log("Please enter a valid year of birth.");
} else if(mySign === 0) {
    console.log("Your Chinese Zodiac is Rat");
} else if(mySign === 1) {
    console.log("Your Chinese Zodiac is Ox");
} else if(mySign === 2) {
    console.log("Your Chinese Zodiac is Tiger");
} else if(mySign === 3) {
    console.log("Your Chinese Zodiac is Rabbit");
} else if(mySign === 4) {
    console.log("Your Chinese Zodiac is Dragon");
} else if(mySign === 5) {
    console.log("Your Chinese Zodiac is Snake");
} else if(mySign === 6) {
    console.log("Your Chinese Zodiac is Horse");
} else if(mySign === 7) {
    console.log("Your Chinese Zodiac is Goat");
} else if(mySign === 8) {
    console.log("Your Chinese Zodiac is Monkey");
} else if(mySign === 9) {
    console.log("Your Chinese Zodiac is Rooster");
} else if(mySign === 10) {
    console.log("Your Chinese Zodiac is Dog");
} else {
    console.log("Your Chinese Zodiac is Pig");
}