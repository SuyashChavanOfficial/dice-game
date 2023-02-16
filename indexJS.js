var randomNumber1 = (Math.floor(Math.random() * 6) + 1);

var newDiceImage1 = "dice" + randomNumber1 + ".png";

var newImage1 = "images/" + newDiceImage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", newImage1);


var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var newDiceImage2 = "dice" + randomNumber2 + ".png";

var newImage2 = "images/" + newDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", newImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}