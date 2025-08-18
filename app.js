let userCount=0;
let compCount=0;
let gameActive = true;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userNo=document.querySelector(".userNo");
const compNo=document.querySelector(".compNo");
const resetBtn=document.querySelector(".reset-btn")

const getCompChoice=()=>{
    const choices=["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];

}
const removeBgColour=()=>{
    msg.classList.remove("msg-BgGreen");
    msg.classList.remove("msg-BgRed");
}
const reset=()=>{
    userCount=0;
    userNo.innerText=userCount;
    compCount=0;
    compNo.innerText=compCount;
    msg.innerText="Play Your Move";
    removeBgColour();
    
}
resetBtn.addEventListener("click",()=>{
    reset();
    
    
    msg.classList.add("msg");
})
const bgGreen=()=>{
    msg.classList.add("msg-BgGreen");
    msg.classList.remove("msg-BgRed");
}
const bgRed=()=>{
    msg.classList.add("msg-BgRed");
    msg.classList.remove("msg-BgGreen");
}
const checkFinalWin=(userCount,compCount)=>{
    if(userCount==5){
        bgGreen();
        msg.innerText="YOU WIN";
        gameActive=false;
        setTimeout(()=>{reset();gameActive=true;} , 2000);
        
    }
    else if(compCount==5){
        bgRed();
        msg.innerText="YOU LOST, Computer Win";
        gameActive=false;
        setTimeout(()=>{reset();gameActive=true;} , 2000);
        
    }
}

const winner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`YOU WIN, your ${userChoice} beats ${compChoice}`;
        bgGreen();
        userCount++;
        userNo.classList.add("score");
        userNo.innerText=userCount;
    }
    else{
        msg.innerText=`YOU LOST, ${compChoice} beats your ${userChoice}`;
        bgRed();
        compCount++;
        compNo.classList.add("score");
        compNo.innerText=compCount;
    }
    checkFinalWin(userCount,compCount);
    
}
const removeScore=()=>{
    userNo.classList.remove("score");
        compNo.classList.remove("score");
}
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        if(!gameActive)return;
        removeScore();
        const userChoice=choice.getAttribute("id");
        const compChoice=getCompChoice();
        if(userChoice===compChoice){
            msg.innerText="Game Draw";
            removeBgColour();
            removeScore();
        }
        else{
            let userWin=true;
            if(userChoice==="rock"){
                userWin=compChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                userWin=compChoice==="rock"?true:false;
            }
            else if(userChoice==="scissors"){
                userWin=compChoice==="rock"?false:true;
            }
            winner(userWin,userChoice,compChoice);
        }

    })
})
