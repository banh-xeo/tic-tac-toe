import { GameBoard } from "./gameBoard.js";
import { updateButtonToEnd, updateButtonToStart, addEventListenerToSquare, clearBoard } from "./utilities.js";

var gameBoard = new GameBoard();


function handleSquareClick(event) {
    /* Handle the logic of what to do when each square is clicked */

    // check if the game has started
    if (gameBoard.isGameStart === false) {
        console.warn("Game has not started yet!");
        return;
    }

    const square = event.target;
    const id = square.id;
    console.log(`Square with id=${id} is clicked`);
    const row = parseInt(id[3]);
    const col = parseInt(id[4]);

    // check if the board position is empty
    if (square.textContent !== "") {
        console.warn("Square is occupied!")
        return;
    }    

    // try making a move
    const player = gameBoard.currentPlayer;
    if (gameBoard.makeMove(row, col, player.symbol)) {
        square.textContent = player.symbol;

        // check for wins
        if (gameBoard.verifyPosition(row, col)) {
            alert(`${player.name} is the winner`);
            resetGame();
        }

        // checks for draw
        if (gameBoard.isDraw()) {
            alert(`THE GAME IS DRAW`);
            resetGame();
        }

        // switch player
        gameBoard.switchPlayer();
    }
}

function startGame() {
    updateButtonToEnd();
    gameBoard.isGameStart = true;
    addEventListenerToSquare(handleSquareClick);
}

function resetGame() {
    updateButtonToStart();
    gameBoard = new GameBoard();
    // adding delay to clearing board
    setTimeout(() => {
        clearBoard();
    }, 500);
}

const gameButton = document.querySelector(".btn");
gameButton.addEventListener("click", () => {
    if (!gameBoard.isGameStart) {
        startGame();
    }else {
        resetGame();
    }
});
