let userScore=0
let compscore=0

const choices=document.querySelectorAll(".choices")
const msg=document.querySelector("#msg")

const userScoreId=document.querySelector("#user-score")
const compScoreId=document.querySelector("#comp-score")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})

const drawGame=()=>{
    console.log('draw game')
    msg.innerText="Draw"
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true
        }
        else if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true
        }else{
            userWin=compChoice==="scissor"?false:true
        }
        showWinner(userWin)
    }
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log('you win')
        msg.innerText="You win"
        userScore++;
        userScoreId.innerText=userScore
    }else{
        console.log('you lose')
        msg.innerText="You lose"
        compscore++;
        compScoreId.innerText=compscore
    }
}
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx]
}