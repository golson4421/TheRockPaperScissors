let humanScore = 0;
let computerScore = 0;
const humanScore_span = document.getElementById("human-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const paper_div = document.getElementById("paper");
const rock_div = document.getElementById("rock");
const rock_rock_div = document.getElementById("rock-rock");
const scissors_div = document.getElementById("scissors");


function gameReset(){
    humanScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    const choices = ["paper", "rock", "scissors", "rock_rock"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

function convertToWords(choice) {
    if (choice === "rock") return "Dwayne 'The Rock' Johnson";
    if (choice === "scissors") return "Scissors";
    if (choice ==="rock_rock") return "Rock"
    return "Paper"
}

function win(user, computer) {
    humanScore++;
    humanScore_span.innerHTML = humanScore;
    result_p.innerHTML = `Victory!     ${convertToWords(user)} beats ${convertToWords(computer)}!`;
    document.getElementById(user).classList.add('wining-animation');
    setTimeout(function() {document.getElementById(user).classList.remove('wining-animation') }, 1000);
    if (humanScore === 10) {
        alert('YAYAYYAYAYA game reset');
        gameReset();
    }
 }

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Defeat!   ${convertToWords(computer)} beats ${convertToWords(user)}!`;
    document.getElementById(user).classList.add('losing-animation');
    setTimeout(function () { document.getElementById(user).classList.remove('losing-animation') }, 1000);
    if (computerScore === 10) {
        alert('Loser! Game reset');
        gameReset();

    }
}

function tie(user, computer) {
    result_p.innerHTML = `Tie!   ${convertToWords(user)} and ${convertToWords(user)} battle to a draw`;
    document.getElementById(user).classList.add('tie-animation');
    setTimeout(function () { document.getElementById(user).classList.remove('tie-animation') }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "rockscissors":
        case "rockrock_rock":   
        case "scissorspaper":
        case "rockscissors":
            win(userChoice, computerChoice);
            break;
        case "paperrock":
        case "rock_rockrock":  
        case "scissorsrock":
        case "scissorsrock_rock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "rock_rockrock_rock":
        case "scissorsscissors":
        case "paperpaper":
            tie(userChoice, computerChoice);
            break;
    }
}


function main() {
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    rock_div.addEventListener('click', function () {
        game("rock");
    })
    scissors_div.addEventListener('click', function () {
        game("scissors");
    })
    rock_rock_div.addEventListener('click', function () {
        game("rock_rock");
    })
}

main();

