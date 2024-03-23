let boxes = document.querySelectorAll(".box");
let resetGame = document.getElementById("resetBtn");
let newGame = document.querySelector("#newBtn");
let messageContainer = document.querySelector(".msg-container");
let messageBox = document.querySelector("#msg");
let count = 0;
// For true turn of playerX and For false turn of PlayerO
let turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
        if (count == 9) {
            messageBox.innerText = "So Sad For This Draw";
        }
    })
})
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;
        if (position1Val != "" && position2Val != "" && position3Val != "") {
            if (position1Val == position2Val && position2Val == position3Val) {
                showWinner(position1Val);
                return
            }
        }
    }
    count++;
}

const showWinner = (winner) => {
    messageBox.innerText = "Congratulations ,Winner Is " + winner;
    messageContainer.classList.remove("hide");
    disableButtons();
}


const resetGameFunction = () => {
    count = 0;
    turn = 0;
    enableButtons();
    messageContainer.classList.add("hide");
}

const disableButtons = () => {
    for (let btn of boxes) {
        btn.disabled = true;
    }
}

const enableButtons = () => {
    for (let btn of boxes) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

newGame.addEventListener('click', resetGameFunction);
resetGame.addEventListener('click', resetGameFunction); 