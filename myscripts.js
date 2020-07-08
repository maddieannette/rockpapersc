let gameChoice = ['buttonrock', 'buttonpaper', 'buttonscissors'];
let round = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * gameChoice.length);
    return gameChoice[randomNumber];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === 'buttonrock' && computerSelection === 'buttonscissors' ||
        playerSelection === 'buttonpaper' && computerSelection === 'buttonrock' ||
        playerSelection === 'buttonscissors' && computerSelection === 'buttonpaper') {
        document.getElementById("result").innerHTML = "YOU WIN";
    } else if (playerSelection === 'buttonrock' && computerSelection === 'buttonpaper' ||
        playerSelection === 'buttonpaper' && computerSelection === 'buttonscissors' ||
        playerSelection === 'buttonscissors' && computerSelection === 'buttonrock') {
        document.getElementById("result").innerHTML = "YOU LOSE";
    } else {
        document.getElementById("result").innerHTML = "IT'S A TIE";
    }
}
const playerSelection = 'buttonrock'
const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))