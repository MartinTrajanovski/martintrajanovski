let inputKind = document.getElementById("kind");
let inputName = document.getElementById("name");
let inputMessage = document.getElementById("message");
let btn = document.getElementById("btn");

function Animal(kind, name, message) {
    this.kind = kind;
    this.name = name;
    this.speak = function (message) {
        if (message.length > 1) {
            alert(`${this.name} the ${this.kind} says: "${message}!"`);
        }
    }
    if ((kind.length < 1) || (name.length < 1) || (message.length < 1)) {
        alert(`Please fill in the required fields correctly!`);
    }
    else {
        this.speak(message);
    }
}
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let animalObject = new Animal(inputKind.value, inputName.value, inputMessage.value);
    console.log(animalObject);
    inputMessage.value = "";
    inputKind.value = "";
    inputName.value = "";
})