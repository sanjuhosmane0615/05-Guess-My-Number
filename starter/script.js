'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector(".message").textContent = "correct answer !!!!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/



/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highScore = 0 ; 
document.querySelector(".check").addEventListener("click", function(){
    let guess = Number(document.querySelector(".guess").value);
    if(!guess){
        document.querySelector(".message").textContent = "No Number";
        score--;
        document.querySelector(".score").textContent = score;
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number!!!";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "Too High";
        score--;
        document.querySelector(".score").textContent = score;
        }else{
        document.querySelector(".message").textContent = "You lost the Game";
        score--;
        document.querySelector(".score").textContent = 0;
        }
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "Too Low";
        score--;
        document.querySelector(".score").textContent = score;
        }else{
        document.querySelector(".message").textContent = "You lost the Game";
        score--;
        document.querySelector(".score").textContent = score;
        }
    }
});
    document.querySelector(".again").addEventListener("click", function(){
        secretNumber =  Math.trunc(Math.random()*20) +1;
         score = 20;
        document.querySelector(".score").textContent = score ;
        document.querySelector(".guess").value = "";
        document.querySelector(".message").textContent = "Start Guessing";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector(".number").textContent = "?";
    });
     