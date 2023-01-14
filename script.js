
const getComputerChoice = () => {
    let shapes = ["rock", "paper", "scissors"]
    return shapes[Math.floor(Math.random() * shapes.length)]
}
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        computerSelection === "rock" && playerSelection === "scissors")
        return "Rock beats scissors"
    if (playerSelection === "scissors" && computerSelection === "paper" ||
        computerSelection === "scissors" && playerSelection === "paper")
        return "Scissors beat paper"
    if (playerSelection === "paper" && computerSelection === "rock" ||
        computerSelection === "paper" && playerSelection === "rock")
        return "Paper beats rock."
    else
        return "Draw"
}

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = playRound(button.id, getComputerChoice())
    })
})