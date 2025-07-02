class Player {
    constructor(symbol, name) {
        this.symbol = symbol;
        this.name = name;
    }
}

class GameBoard {
    constructor() {
        this.player1 = new Player('X', 'Player 1');
        this.player2 = new Player('O', 'Player 2');
        this.currentPlayer = this.player1;
        this.isGameStart = false;
        this.board = [         
            ['', '', ''],       // 00 | 01 | 02
            ['', '', ''],       // 10 | 11 | 12
            ['', '', '']        // 20 | 21 | 22
        ]
    }

    makeMove(row, col, player) {
        if (this.board[row][col] === ''){
            this.board[row][col] = player;
            return true;
        }
        return false;
    }

    isDraw() {
        for(let i=0; i<this.board.length; i++) {
            for (let j=0; j<this.board[i].length; j++) {
                if (this.board[i][j] === '') {
                    return false;
                }
            }
        }
        return true;
    }

    switchPlayer() {
        this.currentPlayer = (this.currentPlayer === this.player1)? this.player2: this.player1;
        console.log(`Player switched. Current player = ${this.currentPlayer.symbol}`);
    }

    verifyPosition(row, col) {
        if (this.#verifyRow(row) || this.#verifyCol(col)) {
            return true;
        }
        if (row === col && this.#verifyDiagonal()) {
            return true;
        }
        if ((row + col) === 2 && this.#verifyAntiDiagonal()) {
            return true;
        }
        return false;
    }

    #verifyRow(row) {
        // Check if all columns in the given row match the current player's symbol
        if (this.board[row][0] === this.currentPlayer.symbol && 
            this.board[row][1] === this.currentPlayer.symbol && 
            this.board[row][2] === this.currentPlayer.symbol) {
            return true;
        }
        return false;
    }

    #verifyCol(col) {
        // Check if all columns in the given row match the current player's symbol
        if (this.board[0][col] === this.currentPlayer.symbol && 
            this.board[1][col] === this.currentPlayer.symbol &&
            this.board[2][col] === this.currentPlayer.symbol) {
            return true;
        }
        return false;
    }

    #verifyDiagonal() { // row === col
        if (this.board[0][0] === this.currentPlayer.symbol &&
            this.board[1][1] === this.currentPlayer.symbol &&
            this.board[2][2] === this.currentPlayer.symbol) {
            return true;
        }
        return false;
    }

    #verifyAntiDiagonal() { // row + col === 2
        if (this.board[0][2] === this.currentPlayer.symbol &&
            this.board[1][1] === this.currentPlayer.symbol &&
            this.board[2][0] === this.currentPlayer.symbol) {
            return true;
        }
        return false
    }
}

export { GameBoard, Player};