// change the button to END button
export function updateButtonToEnd() {
    const startBtn = document.querySelector(".start-btn");
    console.log("startBtn:", startBtn);
    startBtn.classList.remove("start-btn");
    startBtn.classList.add("end-btn");
    startBtn.innerHTML = "End Game";
}

// change the button to START button
export function updateButtonToStart() {
    const endBtn = document.querySelector(".end-btn");
    console.log("endBTN:", endBtn);
    endBtn.classList.remove("end-btn");
    endBtn.classList.add("start-btn");
    endBtn.innerHTML = "Start Game";
}

// Adding event listener to square
export function addEventListenerToSquare(callback) {
    const squares = document.querySelectorAll(".square");
    for (var i=0; i<squares.length; i++) {
        var tempSquare = squares[i];
        tempSquare.addEventListener("click", callback);
        console.log(`Added event listener to ${tempSquare.id}`);
    }
}

export function clearBoard() {
    const squares = document.querySelectorAll(".square");
    for (var i=0; i<squares.length; i++) {
        squares[i].textContent = '';
    }
}

