let palette=["#4793AF","#FFC470","#DD5746","8B322C"];

function colorNumber(){
    return Math.floor(Math.random()*palette.length);
}
let  boxes=document.querySelectorAll(".box");
//  console.log(boxes)
let resetBtn=document.querySelector("#reset-btn")
// let ele=document.getElementsByClassName("box");
// console.log(ele)
// let arr=Array.from(ele);
// console.log(arr)
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let turnO=true;


const resetGame=()=>{
    turnO=true;

    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
     
        let colorRandom=colorNumber();
        document.body.style.backgroundColor=palette[colorRandom];
      
        box.style.backgroundColor="blue";
        box.style.color="white";
        box.style.border="2px solid red";
        if(turnO==true){
            box.textContent="O";
            turnO=false;
        }else {
            box.textContent="X";
            turnO=true;
        }

        box.disabled=true;
        checkwinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

        box.style.backgroundColor="#ffffc7";
        // box.style.color="white";
        box.style.border="0px ";
    }
}

function showWinner(winner){
    msg.innerText=`congratulations ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner=()=>{
    for (let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
                
            }
        }
    }
}





newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);