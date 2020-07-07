let myArray = ["Rock", "Paper", "Scissors"];
let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
document.body.innerHTML += randomItem;