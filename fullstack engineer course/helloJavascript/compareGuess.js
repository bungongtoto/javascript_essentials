const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    
    if (
        Math.abs(userGuess - secretTarget) < Math.abs(computerGuess - secretTarget)
    ) {
        return true;
    } else {
        return false;
    }
};

console.log(compareGuesses(2, 4, 10));