let computerGuess;
let humanGuess;
let humanScore=0;
let computerScore=0;
let round=1;

const modal = document.querySelector('#modal');
const message = document.querySelector('#message') // to assign content to modal

const roundDisplay = document.querySelector('#round-number');
roundDisplay.textContent = round; //displaying the round at round 1 then its done through inside the function
const start = document.querySelector('#start');
const selection = document.querySelector('.choose-selection');
const playerChoice = document.querySelector('#player-choice'); //to display player choice
const cpChoice = document.querySelector("#computer-choice"); // to display comp choice

const playerPoint = document.querySelector("#player");
playerPoint.textContent=humanScore;

const compPoint = document.querySelector("#computer");
compPoint.textContent=computerScore;




function getComputerChoice(){
    computerGuess = Math.floor(Math.random()*9)+1;
    
    if(computerGuess<4)
        {
           
            computerGuess= "rock";
        }
    else if(computerGuess>3 && computerGuess<7)
        {
            
            computerGuess="paper";
        }
    else {
        
        computerGuess="scissor";
        
    }
    console.log("computer "+computerGuess)
    return computerGuess;
};


function playround(humanChoice,computerChoice){
    
    if(humanChoice===computerChoice){
        message.textContent = "Draw!!!!";
        modalpop();
        playerPoint.textContent=humanScore;
        compPoint.textContent=computerScore;
    }
    else{
        if(humanChoice==='rock' && computerChoice==='paper'){
            message.textContent = "You lose!!!!";
            modalpop();
            computerScore = ++computerScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='rock' && computerChoice==='scissor'){
            message.textContent = "You Win!!!!"
            modalpop();
            humanScore = ++humanScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='paper' && computerChoice==='rock'){
            message.textContent = "You Win!!!!";
            modalpop();
            humanScore = ++humanScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='paper' && computerChoice==='scissor'){
            message.textContent = "You lose!!!!";
            modalpop();
            computerScore = ++computerScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='scissor' && computerChoice==='rock'){
            message.textContent = "You lose!!!!";
            modalpop();
            computerScore = ++computerScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='scissor' && computerChoice==='paper'){
            message.textContent = "You Win!!!!";
            modalpop();
            humanScore = ++humanScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else{
            alert("invalid input")
        }
    }

}
// function rounds(){
//     humanScore=0;
//     computerScore=0;
//     getComputerChoice();
//     getHumanChoice();
//     playround(humanGuess,computerGuess);
    
//     if(humanScore<computerScore){
//         alert('computer wins!!!')
//     }
//     else{
//         alert('human wins!!!!!!')
//     }
// }


selection.addEventListener('click',(e)=>{
  
    if(round<5){
        getComputerChoice();
        humanGuess=e.target.id;
        playerChoice.textContent = humanGuess;
        cpChoice.textContent = computerGuess;
        playround(humanGuess,computerGuess);
        ++round;
        roundDisplay.textContent = round;
    }
    else if(round===5){
        
        if(humanScore<computerScore){
            message.textContent="Computer wins!!!!"
         }
        else{
             message.textContent="Human wins!!!!"
         }

        modalpop();
        round=1;
        roundDisplay.textContent = round;
        compPoint.textContent = 0;
        playerPoint.textContent = 0;
    }
});


let modalpop =function (){
    modal.showModal();
    setTimeout(modalclose,500);
};
function modalclose(){
    modal.close();
}