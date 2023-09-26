

function getComputerChoice(){
    gameOptions=["Rock","Paper","Scissors"]
    let computerShoot = gameOptions[Math.floor((Math.random())*3)];
    return computerShoot;
}
//consolgetComputerChoice());
/*loses scissors against rock,rock against paper,paper against scissors */
function playRound(playerSelection , computerSelection){
    
    let userScore=0;
    let computerScore=0;
    for(i=1;(i<=5);i++){ 
        playerSelection= prompt("Which one will you shoot? Rock, Paper or Scissors!","paper")
        computerSelection= getComputerChoice();
        if (playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase() ==="paper"){
            computerScore+=1;
            console.log("You Lose! Paper beats Rock");
            
        }
        else if ((playerSelection.toLowerCase()==="scissors") && computerSelection.toLowerCase() ==="rock"){
            computerScore+=1;

            console.log("You Lose! Rock beats Scissors ");
            
        }
        else if (playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase() ==="scissors"){
            computerScore+=1;
            console.log("You Lose! Scissors beats Paper ");
            
        }
        else if (playerSelection.toLowerCase()===("paper") && computerSelection.toLowerCase() ==="rock"){
            userScore+=1;
            console.log("You Win! Paper beats Rock ");
            
        }
        else if (playerSelection.toLowerCase()===("rock") && computerSelection.toLowerCase() ==="scissors"){
            userScore+=1;
            console.log("You Win! Rock beats Scissors ");
            
        }
        else if (playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="paper"){
            userScore+=1;
            console.log("You Win! Scissors beats Paper");
            
        }
        else {
            console.log( `Tie! Your shot of ${playerSelection} is same as ${computerSelection.toLowerCase()} that computer shot `);
        }
    }
    
    console.log (`You got ${userScore} and Computer scored ${computerScore}`);
    return (userScore>computerScore)? "You Win":
            (userScore<computerScore)?"You Lost to Computer":"Phew, Tie match";
}



function game(){
    
    
    return playRound();
    
    

}
console.log(game())
/*
let x=0;
let y=0;
let z=0;
for(i=1;(i<=5);i++){
    
    a=Math.floor(Math.random()*100);
    b=Math.floor(Math.random()*100);
    c=Math.floor(Math.random()*100);
    if (a>b&&a>c){
        x+=1;
        console.log(`${i} is for a`)
    }
    else if(b>a&&b>c){
        y+=1;
        console.log(`${i} is for b`)
    }
    else if (c>a&&c>b){
        z+=1
        console.log(`${i} is for c`)
    }
    
}
console.log(`result is a had ${x} , b had ${y} ,c had ${z}` );*/
