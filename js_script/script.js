const rock= document.querySelector('.rock');
const paper =document.querySelector('.paper');
const scissors= document.querySelector('.scissors');
const gameResult = document.querySelector(".gameResult");
const computerScoreDisplay = document.querySelector('.computerScore');
const userScoreDisplay = document.querySelector('.userScore');

rock.addEventListener("click",()=>{playRound(rock.textContent,getComputerChoice())});
paper.addEventListener('click',()=>playRound(paper.textContent,getComputerChoice()));
scissors.addEventListener('click', ()=>playRound(scissors.textContent,getComputerChoice()));
let userScore=0;
let computerScore=0;
computerScoreDisplay.textContent =  `Computer : ${computerScore}`;
userScoreDisplay.textContent =`Yours : ${userScore}`;

// getComputerChoice() function allows computer to make a random choice between rock paper and scissors.
function getComputerChoice(){
    gameOptions=["Rock","Paper","Scissors"]
    let computerShoot = gameOptions[Math.floor((Math.random())*3)];
    return computerShoot;
}
//playRound() function takes the user's choices or shoot, compares with the computer's choice, and determine
//who won each of the five rounds and calculate the overall score for both players and finally determine 
//who wins the overall game scissors loses against rock,rock loses against paper,paper loses against scissors.
function playRound(playerSelection , computerSelection){
        computerSelection= getComputerChoice();
        if(userScore===5 || computerScore===5){
            let message = (userScore>computerScore)? "You Win Congratulations":
            (userScore < computerScore)?"You Lost to Computer":"Phew, Tie match";
            gameResult.textContent = message;
        }else if(
           (playerSelection.toLowerCase()=== "rock" && computerSelection.toLowerCase() ===     "paper") 
        || (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase() === "rock")
        || (playerSelection.toLowerCase()=== "paper" && computerSelection.toLowerCase() ===    "scissors")){
            if (computerScore < 4){
                computerScoreDisplay.textContent=`Computer : ${++computerScore}`;
                gameResult.textContent = `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
        }   else{
                computerScoreDisplay.textContent=`Computer : ${++computerScore}`;
                gameResult.textContent = `You Lost to Computer`;
            }
               
            
            
        }else if (
            (playerSelection.toLowerCase()=== "paper" && computerSelection.toLowerCase() ===   "rock") 
        ||  (playerSelection.toLowerCase()=== "rock" && computerSelection.toLowerCase() ===    "scissors") 
        ||  (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase()=== "paper")){
            if(userScore<4){
                userScoreDisplay.textContent =`Yours : ${++userScore}`;
                gameResult.textContent = ` You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()} `;}
            else{
                userScoreDisplay.textContent=`Yours : ${++userScore}`;
                gameResult.textContent = "You Win Congratulations";
            }
        }else {
            gameResult.textContent = `Tie! Your shot of ${playerSelection} is same as ${computerSelection.toLowerCase()} that computer shot `;
        }
        
    }
    
    //console.log (`You got ${userScore} and Computer scored ${computerScore}`);
   // return (userScore>computerScore)? "You Win":
            //(userScore<computerScore)?"You Lost to Computer":"Phew, Tie match";

//game() function is used to call and run the playRound() function

   



