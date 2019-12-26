let activity = document.getElementById("activity");
let btn = document.getElementById("add");
let list = document.getElementById("list");
let arr = [];
let toDo = {};


function ToDoObject(errand) {
    this.activity = errand;
    this.isCompleted = false;
    this.completionInfo = function () {
        this.isCompleted = true;
    }
}

function printToDO(object, element) {
    if (object.activity.length > 1) {
        element.innerHTML += `<li>${object.activity}<input type="checkbox" class = "checkButton"></li>Check completed activity`
    } else {
        alert(`Please enter a valid activity!`)
    }
    let checkbox = document.getElementsByClassName("checkButton");
    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("click", function () {
            if (this.checked) {
                this.parentElement.style.textDecoration = "line-through";
                object.completionInfo();
            } else {
                this.parentElement.style.textDecoration = "none";
            }
        })
    }
}
btn.addEventListener("click", function (e) {
    e.preventDefault();
    let toDoApp = new ToDoObject(activity.value);
    printToDO(toDoApp, list);
    arr.push(toDoApp);
    console.log(arr);
    console.log(toDoApp);
})

