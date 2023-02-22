
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')
const shapes = ["rock", "paper", "scissors"]

const getComputerChoice = () => {
    return shapes[Math.floor(Math.random() * shapes.length)]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock" 
    ) return "Rock beats scissors"
    if (playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors"
    ) return "Scissors beat paper"
    if (
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper"
    ) return "Paper beats rock."
    else
        return "A Draw"
}

function game(e) {
    const target = e.target
    display.textContent = playRound(target.id, getComputerChoice())
}

buttons.forEach(button => button.addEventListener('click', game))

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         display.textContent = playRound(button.id, getComputerChoice())
//     })
// })

// buttons.addEventListener('click', game)