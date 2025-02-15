let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let sectionmsg = document.querySelector(".section-msg");
let msg = document.querySelector("#msg");

let turnO = true;//playerO, playerX

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const ResetGame = ()=> {
    turnO = true;
    enableboxes();
    sectionmsg.classList.add("hide");
};

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if (turnO) {//playerO
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO= true
        }
        box.disabled = true;

        checkwinner();
    });
});

 const disableboxes = () => {
    for (let box of boxes) {
        box.disabled= true;
    }
 };

 const enableboxes = () => {
    for (let box of boxes) {
        box.disabled= false;
        box.innerText="";
    }
 };

 const showWinner = (Winner) => {
    msg.innerText= `Congratulations, win ${Winner}`;
    sectionmsg.classList.remove("hide");
    disableboxes();

 };

const checkwinner = () => {
    for ( let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !=""&& pos2val !="" && pos3val !="") {
            if (pos1val == pos2val && pos2val==pos3val){
                //console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};
newgamebtn.addEventListener("click", ResetGame);
resetbtn.addEventListener("click", ResetGame);