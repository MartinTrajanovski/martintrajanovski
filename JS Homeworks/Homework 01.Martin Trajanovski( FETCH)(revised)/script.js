let btn = document.getElementById("btn");
let table = document.getElementById("table");
let getLinks = () => {
    let arrChar = [];
    fetch(`https://swapi.co/api/films/`)
        .then(result => {
            return result.json();
        })
        .then(result => {
            for (character of result.results)
                arrChar.push(character.characters[0]);
        })
    return arrChar;
}
let arrayOfLinks = getLinks();
let getNames = (array) => {
    let arrayOfSW = [];
    for (i = 0; i < array.length; i++)
        fetch(array[i])
            .then(result => {
                return result.json()
            })
            .then(result => {
                arrayOfSW.push(result.name)
            })
    return arrayOfSW;
}
btn.addEventListener("click", (e) =>  {
    e.preventDefault();
    let arrayOfNames = getNames(arrayOfLinks);
    console.log(arrayOfNames);
    fetch(`https://swapi.co/api/films/`)
    .then(result => {
        return result.json()
    })
    .then(result => {
        for (film of result.results) {
            table.innerHTML += `<tr><td>${film.title}</td><td>${film.director}</td><td>${film.producer}</td>
<td>${film.episode_id}</td><td>${film.url}</td>
<td>${film.characters.length}</td><td>${film.planets.length}</td><td>${film.starships.length}</td>
<td>${film.vehicles.length}</td><td>${film.species.length}</td><td class = "char"></td></tr>`;
        }
        for (i = 0; i < arrayOfNames.length; i++) {
            document.getElementsByClassName("char")[i].innerText = `${arrayOfNames[i]}`
        }
    })  
});