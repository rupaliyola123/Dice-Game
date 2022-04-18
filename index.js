var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomSrcImg = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSrcImg);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSrcImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomSrcImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!";
}