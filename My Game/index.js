'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1 ;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click",function(){
    let guess = Number(document.querySelector(".guess").value);
    if(!guess){
        document.querySelector("message").textContent = "Please enter a Number";
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number";
        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        document.querySelector("body").style.backgroundColor = "Green";
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber;
    }else if(guess > secretNumber){
        document.querySelector(".message").textContent = "Too High";
        score--;
        document.querySelector(".score").textContent = score;
    }else if(guess < secretNumber){
        document.querySelector(".message").textContent = "Too Low";
        score--;
        document.querySelector(".score").textContent = score;
    }
})

document.querySelector(".again").addEventListener("click",function(){
     score = 20;
     let guess = "";
    secretNumber = Math.trunc(Math.random()*20) + 1 ;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = " gray"
    document.querySelector(".number").style.width = "15rem";
    (document.querySelector(".guess").value)="";
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".number").textContent = "?";
})