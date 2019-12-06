let myYearOfBirth = prompt("Please enter the year of your birth:");
myYearOfBirth = Number(myYearOfBirth);
if(Number.isNaN(myYearOfBirth)) {
    console.log("Please enter a valid year of birth.");
}
let mySign =  (myYearOfBirth - 4) % 12;
switch(mySign) {
    case 0:
        console.log("Your Chinese Zodiac is Rat");
        break;
    case 1:
        console.log("Your Chinese Zodiac is Ox");
        break;
    case 2:
        console.log("Your Chinese Zodiac is Tiger");
        break;
    case 3:
        console.log("Your Chinese Zodiac is Rabbit");
        break;
    case 4:
        console.log("Your Chinese Zodiac is Dragon");
        break;
    case 5:
        console.log("Your Chinese Zodiac is Snake");
        break;
    case 6:
        console.log("Your Chinese Zodiac is Horse");
        break;
    case 7:
        console.log("Your Chinese Zodiac is Goat");
        break;
    case 8:
        console.log("Your Chinese Zodiac is Monkey");
        break;
    case 9:
        console.log("Your Chinese Zodiac is Rooster");
        break;
    case 10:
        console.log("Your Chinese Zodiac is Dog");
        break;
    case 11:
        console.log("Pig");
        break;
}