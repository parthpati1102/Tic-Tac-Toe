let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let newButton  = document.querySelector("#new-btn");
let MsgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [[0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8]];

boxes.forEach((box) =>{
  box.addEventListener("click" , function(){
    console.log("Box was Clicked");
     if(turnO){
        box.innerText = "O";
        turnO = false;
     }
     else{
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true;
     CheckWinner();
  })
})

const resetGame = () => { 
    turnO = true;
    EnableBoxes();
    MsgContainer.classList.add("hide");
}

const DisableBoxes  = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const EnableBoxes  = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const ShowWinner = (winner) =>{
     msg.innerText = `Congratulations , Winner is ${winner}`;
     MsgContainer.classList.remove("hide");
     DisableBoxes();
}
const CheckWinner = () =>{
    for(pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1===posVal2 && posVal2===posVal3){
                   console.log("Winner");
                   ShowWinner(posVal1);
            }
        }
    }
}

newButton.addEventListener("click" , resetGame);
ResetBtn.addEventListener("click" , resetGame);
