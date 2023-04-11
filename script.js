let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random()*10);
}
//console.log(generateTarget(8));

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    if ((Math.abs(targetNumber - userGuess)) <= (Math.abs(targetNumber - computerGuess))){
        return true;
    }
    else return false;
}

const updateScore = score =>{
    if(score === 'human'){
        humanScore +=1;
    } else if(score ==='computer'){ 
        computerScore +=1;
    }
}

const advanceRound = () =>{
    currentRoundNumber +=1;
}

console.log(generateTarget(8));
console.log(compareGuesses());
console.log(updateScore());
console.log(advanceRound());
