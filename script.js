let body = document.querySelector("body");
let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
//it changed the background color and the header color
// - What do you think .style does?
//I think it changes CSS

// 2. Try the following:
// - Make it so that the colors are different than what's used.
// - Try using a hex color code.
button.addEventListener("click", function() {
    body.style.backgroundColor = "green";
    header.style.color = "orange";
    img.style.border = "5px solid blue";
});