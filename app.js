var pics = [
    "imgs/ryten.jpg", //0
    "imgs/image.jpg", //1
    "imgs/IMG_7895.jpg", //2
    "imgs/IMG_8043.jpg", //3
    "imgs/IMG_8046.jpg", //4
    "imgs/ryten_top.jpg", //5



]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;


btn.addEventListener("click", function() {
    if (counter === 6) {
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;



});