let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let radioOne = document.getElementsByName("bookStatus")[0];
let radioTwo = document.getElementsByName("bookStatus")[1];
let btn = document.getElementById("btn");
let table = document.getElementById("table");
function CreateBookObject(book, writer, element) {
    this.title = book;
    this.author = writer;
    this.readingStatus = false;
    this.info = function () {
        if (this.readingStatus === false) {
            alert(`You should read '${book}' by ${writer}!`);
        } else {
            alert(`Already read '${book}' by ${writer}!`);
        }
    }
    element.innerHTML += `<tr>`
    if (book.length < 1 || writer.length < 1) {
        alert("Please fill in the requred fields!");
    } else if (radioOne.checked) {
        this.readingStatus = true;
        this.info();
        element.innerHTML += `<td>${writer}</td><td>${book}</td>
    <td>${radioOne.value}</td>`;
    } else if (radioTwo.checked) {
        this.readingStatus = false;
        this.info();
        element.innerHTML += `<td>${writer}</td><td>${book}</td>
    <td>${radioTwo.value}</td>`;
    } else {
        alert(`Please choose one of the two options!`);
    }
    element.innerHTML += `</tr>`;
}

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let bookObject = new CreateBookObject(bookTitle.value, bookAuthor.value, table);
    console.log(bookObject);
    bookTitle.value = "";
    bookAuthor.value = "";
});

