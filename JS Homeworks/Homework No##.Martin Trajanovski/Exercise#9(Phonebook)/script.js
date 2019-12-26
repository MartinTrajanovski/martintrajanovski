let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneInput = document.getElementById("phone");
let para = document.getElementById("para");
let button = document.getElementById("btn");
let table = document.getElementsByTagName("table")[0];

function Person(name, surname, phone) {
    this.firstName = name;
    this.lastName = surname;
    this.phoneNumber = phone;
}
function fieldMessages(name, surname, phone, element) {
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
    phone.addEventListener("focus", function () {
        element.innerText = `*Phone number field must not be empty.`;
    });
    phone.addEventListener("focusout", function () {
        element.innerText = "";
    });
};
function printValuesInTable(name, surname, phone, element) {
    if ((name.length >= 2 && surname.length >= 2 && phone.length !== null)) {
        element.innerHTML += `<tr><td class = "tds" contenteditable="false">${name}</td> <td class = "tds" contenteditable="false">${surname}</td>
        <td class = "tds" contenteditable="false">${phone}</td><td><input type="submit" value="Edit" class ="editBtn"></td>
        <td><input type="submit" value="Delete" class="deleteBtn"></td></tr>`;
    } else {
        alert("Please fill in the required fields correctly!");
    }
}
function editAndDelete() {
    let deleteBtn = document.getElementsByClassName("deleteBtn");
    for (i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function () {
            this.closest('tr').remove();
        })
    }
    let editBtn = document.getElementsByClassName("editBtn");
    let tds = document.getElementsByClassName("tds");
    for (i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener("click", function () {
            for (td of tds) {
                if (td.contentEditable = "false") {
                    td.contentEditable = "true";
                } else {
                    td.contentEditable = "false";
                }
            }
        })
    }
}
button.addEventListener("click", function (event) {
    event.preventDefault();
    let newUser = new Person(firstNameInput.value, lastNameInput.value, phoneInput.value);
    printValuesInTable(firstNameInput.value, lastNameInput.value, phoneInput.value, table);
    editAndDelete();
    console.log(newUser);
});
window.addEventListener("load", function () {
    fieldMessages(firstNameInput, lastNameInput, phoneInput, para);
});