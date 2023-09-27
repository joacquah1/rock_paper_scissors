
// getComputerChoice() function allows computer to make a random choice between rock paper and scissors.
function getComputerChoice(){
    gameOptions=["Rock","Paper","Scissors"]
    let computerShoot = gameOptions[Math.floor((Math.random())*3)];
    return computerShoot;
}
//playRound() function takes the user's choices or shoot, compares with the computer's choice, and determine
//who won each of the five rounds and calculate the overall score for both players and finally determine 
//who wins the overal game scissors loses against rock,rock loses against paper,paper loses against scissors.
function playRound(playerSelection , computerSelection){
    let userScore=0;
    let computerScore=0;
    for(i=1;(i<=5);i++){ 
        playerSelection= prompt("Which one will you shoot? Rock, Paper or Scissors!","paper")
        computerSelection= getComputerChoice();

        if (
           (playerSelection.toLowerCase()=== "rock" && computerSelection.toLowerCase() ===     "paper") 
        || (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase() === "rock")
        || (playerSelection.toLowerCase()=== "paper" && computerSelection.toLowerCase() ===    "scissors")){
            computerScore+=1;
            console.log(`You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`);
            
        }else if (
            (playerSelection.toLowerCase()=== "paper" && computerSelection.toLowerCase() ===   "rock") 
        ||  (playerSelection.toLowerCase()=== "rock" && computerSelection.toLowerCase() ===    "scissors") 
        ||  (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase()=== "paper")){
            userScore+=1;
            console.log(` You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()} `);
            
        }else {
            console.log( `Tie! Your shot of ${playerSelection} is same as ${computerSelection.toLowerCase()} that computer shot `);
        }
    }
    
    console.log (`You got ${userScore} and Computer scored ${computerScore}`);
    return (userScore>computerScore)? "You Win":
            (userScore<computerScore)?"You Lost to Computer":"Phew, Tie match";
}
//game() function is used to call and run the playRound() function
function game(){
    return playRound();
}
console.log(game())
