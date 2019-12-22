let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pass");
let checkbox = document.getElementById("showPass")
let para = document.getElementById("para");
let button = document.getElementById("btn");
let table = document.getElementsByTagName("table")[0];

function Person(name, surname, mail, pass) {
    this.firstName = name;
    this.lastName = surname;
    this.eMail = mail;
    this.password = pass;
}
function fieldMessages(name, surname, mail, pass, showPass, element) {
    pass.addEventListener("focus", function () {
        element.innerHTML += `*Password must contain at least 8 characters, including: <ul>
    <li>1 uppercase letter,</li>
    <li>1 lowercase letter,</li>
    <li>1 special character,</li>
    <li>and 1 number.</li></>`;
    });
    pass.addEventListener("focusout", function () {
        element.innerText = "";
    });
    showPass.addEventListener("click", function () {
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    });
    name.addEventListener("focus", function () {
        element.innerText = `*First name must contain at least 2 characters.`;
    });
    name.addEventListener("focusout", function () {
        element.innerText = "";
    });
    surname.addEventListener("focus", function () {
        element.innerText = `*Last name must contain at least 2 characters.`;
    });
    surname.addEventListener("focusout", function () {
        element.innerText = "";
    });
    mail.addEventListener("focus", function () {
        element.innerText = `*The E-Mail field must not be empty.`;
    });
    mail.addEventListener("focusout", function () {
        element.innerText = "";
    });
};
function printValuesInTable(name, surname, mail, pass, element) {
    if ((name.length >= 2 && surname.length >= 2 && mail.length !== null) && (pass.match(/[a-z]/g) && pass.match(
        /[A-Z]/g) && pass.match(
            /[0-9]/g) && pass.match(
                /[^a-zA-Z\d]/g) && pass.length >= 8)) {
    element.innerHTML += `<tr><td>${name}</td> <td>${surname}</td>
        <td>${mail}</td>
        <td>${pass}</td></tr>`;
    } else {
        alert("Please fill in the required fields correctly!");
    }
};
button.addEventListener("click", function (event) {
    event.preventDefault();
    printValuesInTable(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value, table);
    let newUser = new Person(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value);
    console.log(newUser);
});
window.addEventListener("load", function () {
    fieldMessages(firstNameInput, lastNameInput, emailInput, passwordInput, checkbox, para);
});