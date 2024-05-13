let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector("#msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const gameWin=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    trun0=true;
    enableBoxes();
    msgcontainer.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O" ;
            turnO=false;   
        }
        else{
        box.innerText="X";
        turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        msgcontainer.classList.remove("hide"); 
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    disableBoxes();
    
};
const checkWinner=()=>{
    for(let pattern of gameWin){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos3Val===pos3Val){
            
            showWinner(pos1Val);
        }   
    }
}
};

newGameBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
