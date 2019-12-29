let inputName = $("#name");
let inputMessage = $("#message")
let btn = $("#btn");
let form = $("#form");

function printGreeting(name, message, element) {
    if (name.length > 1 && message.length > 4) {
        element.after(`<h1>Hello there, ${name}! Your message: "${message}" will echo through the world!`);
    } else {
        element.after(`<h1>Please enter a valid name and a message longer than four characters!<h1>`);
    }
}
btn.click(function(event){
    event.preventDefault();
    printGreeting(inputName.val(), inputMessage.val(), form);
    inputName.val(""); 
    inputMessage.val("");
});
inputName.focus(function(){
    $("h1").text("");
})
inputMessage.focus(function(){
    $("h1").text("");
})