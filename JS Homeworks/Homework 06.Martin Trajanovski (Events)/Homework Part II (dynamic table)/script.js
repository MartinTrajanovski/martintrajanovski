let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let button = document.getElementById("btn");
let div = document.getElementById("table");
let table = "";

function createTable(row, column, element) {
    for (r = 1; r <= row; r++) {
        table += `<tr>`;
        for (i = 1; i <= column; i++) {
            table += `<td>Row - ${r} Column - ${i}</td>`;
        }
        table += `</tr>`;
    }
    element.innerHTML += `<table border = "2">${table}</table>`;
}
button.addEventListener("click", function (event) {
    event.preventDefault();
    createTable(rows.value, columns.value, div);
})