// html elements
let example1 = document.querySelector(".example-1");
let pink = document.querySelector(".pink");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let lightGreen = document.querySelector(".light-green");
let row1 = document.querySelector(".row-1");

// CHALLENGE #1 - make the rows match

// 1. Set the styling of `example1` to a background color of black.
example1.style.backgroundColor = "#191919";

// 2. Set the styling of `pink` to a background color of pink.
pink.style.backgroundColor = "pink";
// 3. Set the styling of `green` to a background color of green.
green.style.backgroundColor = "green"
// 4. Set the styling of `blue` to a background color of blue.
blue.style.backgroundcolor = "blue";
// 5. Set the styling of `lightGreen` to a background color of lightGreen.
lightGreen.style.backgroundColor = "lightgreen";
// 6. Set the styling of `row1` to have a font color of white.
row1.style.color = "white";


// CHALLENGE #2 - style the image

let image = document.querySelector(".image");
let imageButton = document.querySelector(".image-button");
                                   
// 7. Add an event listener to `imageButton`
// - The event type should be "click" or "dblclick"
imageButton.addEventListener('click', function(){
  // 8. Change the `src` attribute of `image` to a different image.
  image.src = "https://cdn.mos.cms.futurecdn.net/Wak2kpPQjCm8AVUBW2eEB4.jpg";
});
// Include the next tasks in the body of the function.
image.style.width = "300px";
image.style.border = "5px solid #42068c";
// 8. The image is wayyyy too big and needs a border.
// - Set the width of `image` to 300px
// - Set the border of `image` so that it's:
//   - solid
//   - hex color #42068c
//   - 5 pixels
