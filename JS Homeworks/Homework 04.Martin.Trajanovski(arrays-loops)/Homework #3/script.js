let firstNames = ["Martin", "Bisera", "Marko", "Jovana", "Ivan", "Natasa"];
let lastNames = ["Trajanovski", "Daskalovska", "Teofilovski", "Arsoska", "Petrusevski", "Debarlieva"];
let fullNames = [];
let ordinalNumber = 0;

function listOfStudents (name, surname) {
    for (i = 0; i < name.length; i++) {
        ordinalNumber++;
        fullNames.push(`${ordinalNumber}. ${name[i]} ${surname[i]}`);
    }
    return fullNames;
}
console.log(listOfStudents(firstNames, lastNames));