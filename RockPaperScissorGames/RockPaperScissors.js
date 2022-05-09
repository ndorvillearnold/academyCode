//https://www.codecademy.com/projects/practice/rock-paper-scissors-javascript

const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('error, Please type rock, paper, or scissors. ');
    }
}

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())


const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return 'game was a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'sorry computer won';

        } else {
            return 'congratulations, you  won';
        }

    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'sorry, computer winner';
        } else {
            return 'sorry, you won'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer won'
        }
    }

};
console.log(determineWinner('rock', 'scissors'))
console.log(determineWinner('scissors', 'scissors'))
console.log(determineWinner('scissors', 'rock'))





