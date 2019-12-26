let who = document.getElementById("who");
let when = document.getElementById("when");
let where = document.getElementById("where");
let button = document.getElementById("btn");
let para = document.getElementById("story");

function interactiveStory (person, time, place, element) {
    if (person.length >= 1 && time.length >= 1 && place.length >= 1) {
        element.innerText += "";
    element.innerText += `Once upon a time, there was an extraordinary person who went by the name of ${person}. 
    He lived in ${place} during ${time}. 
    He was a true lunatic, but also quite kind in his own right!`;
    } else {
        alert("Please fill in the required fields!")
    }
    
}

button.addEventListener("click", function(){
    interactiveStory(who.value, when.value, where.value, para);
})

