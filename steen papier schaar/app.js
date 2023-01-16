const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const result = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

let computer;
let player;
let result;

possibleChoices.forEach(button = button.addEventListener('click',(e) = {
player = e.target.id;
playerChoice.innerHtml = player;
generateComputerChoice();
}));

const randomNumber = Math.floor(Math.random() * 3) + 1;

if(randomNumber == 1) {
 computer = "rock"
}
if(randomNumber == 2) {
computer = "paper"
}
if(randomNumber == 3) {
computer = "scissors"
}
computerChoice.innerHTML = computer


  function getResult(){

    if(computer == "rock") && player == "paper" {
      result = "je hebt gewonnen"
      }
      
      if(computer == "paper") && player == "scissors" {
        result = "je hebt gewonnen"
        }
      
        if(computer == "scissors") && player == "rock" {
          result = "je hebt gewonnen"
          }
      
          if(computer == "rock") && player == "rock" {
            result = "het is gelijkspel"
            }
            
            if(computer == "paper") && player == "paper" {
              result = "het is gelijkspel"
              }
      
              if(computer == "scissors") && player == "scissors" {
                result = "het is gelijkspel"
                }
      
                if(computer == "rock)" && player == "scissors" {
                  result = "je hebt verloren"
                  }
      
                  if(computer == "paper") && player == "rock" {
                    result = "je hebt verloren"
                    }
      
                    if(computer == "scissors") && player == "paper" {
                      result = "je hebt verloren"
                      }
                   }

                   resultOutput.innerHTML 