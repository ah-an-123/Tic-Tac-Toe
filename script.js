let boxes = document.querySelectorAll(".btn");
let turn = true;// True For X  False For O
let winnerAnnoucer = document.querySelector(".winnerAnnoucer");
let cancelButton = document.getElementById("cancelButton");
let winnerLabel = document.getElementById("winnerLabel");
let newButton = document.getElementById("newButton");
let resetButton = document.getElementById("resetButton");
let count = 1;
let isWinner = 0;
const winningPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];

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
        checkWinner();
        count++;
        if (count == 10 && isWinner == 0) {
            drawGame();
        }
    })
})
const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                for (let box of boxes) {
                    box.disabled = true;
                }
                showWinner(val1);
            }
        }
    }
}
const showWinner = (winner) => {
    isWinner = 1;
    winnerAnnoucer.hidden = false;
    winnerLabel.innerText = "Congratulations! " + winner;
}

cancelButton.addEventListener('click', () => {
    winnerAnnoucer.hidden = true;
})

const resetGame = () => {
    count = 1;
    isWinner = 0;
    winnerAnnoucer.hidden = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const drawGame = () => {
    count = 1;
    winnerAnnoucer.hidden = false;
    isWinner = 0;
    winnerLabel.innerText = "Game Is Draw!";
}

newButton.addEventListener('click', () => {
    resetGame();
})
resetButton.addEventListener('click', () => {
    resetGame();
})
