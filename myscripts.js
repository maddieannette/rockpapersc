let gameChoice = ['buttonrock', 'buttonpaper', 'buttonscissors'];
let playerScore = 0;
let cpuScore = 0;
let scoreRound = 0;
//Random Number Generator
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * gameChoice.length);
    return gameChoice[randomNumber];
}

//Player vs Computer number choice
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (computerSelection === 'buttonrock') {
        document.getElementById("cpuchoice").innerHTML = "CPU: ROCK";
    } else if (computerSelection === 'buttonpaper') {
        document.getElementById("cpuchoice").innerHTML = "CPU: PAPER";
    } else if
        (computerSelection === 'buttonscissors')
        document.getElementById("cpuchoice").innerHTML = "CPU: SCISSORS";
    if (playerSelection === 'buttonrock' && computerSelection === 'buttonscissors' ||
        playerSelection === 'buttonpaper' && computerSelection === 'buttonrock' ||
        playerSelection === 'buttonscissors' && computerSelection === 'buttonpaper') {
        document.getElementById("result").innerHTML = "YOU WIN THIS ROUND";
        document.getElementById("playerScore").innerHTML = playerScore += 1;
        if (playerScore >= 5) {
            alert("YOU WIN THE GAME!")
        }
        return playerScore
    } else if (playerSelection === 'buttonrock' && computerSelection === 'buttonpaper' ||
        playerSelection === 'buttonpaper' && computerSelection === 'buttonscissors' ||
        playerSelection === 'buttonscissors' && computerSelection === 'buttonrock') {
        document.getElementById("result").innerHTML = "YOU LOSE THIS ROUND";
        document.getElementById("cpuScore").innerHTML = cpuScore += 1;
        if (cpuScore >= 5) {
            alert("YOU LOSE THE GAME!")
        }
        return cpuScore
    } else {
        document.getElementById("result").innerHTML = "IT'S A TIE";
    }
}

//const playerSelection = 'buttonrock'
//const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))