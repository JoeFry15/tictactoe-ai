import promptSync from 'prompt-sync';

export function getWinner(board : (null | string)[][]) : string | null {
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][0] !== null) {
          return board[row][0];
        }
      }
    
      for (let col = 0; col < 3; col++) {
        if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== null) {
          return board[0][col];
        }
      }
    
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
        return board[0][0];
      }
    
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
        return board[0][2];
      }

    return null;
}

export function makeMove(board : (null | string)[][], move : [number, number], player : string) : (null | string)[][] {
    if (board[move[0]-1][move[1]-1] == null) {
        board[move[0]-1][move[1]-1] = player
    } else {
        throw new Error(`Invalid move, ${move} position already occupied.`);
    }
    return board;
} 

export function getMove() : [number, number] {
    const column : number = Number(promptSync()("What is your move's column? "));
    const row : number = Number(promptSync()("What is your move's row? "));
    return [row, column];
}

export function newBoard() : null[][]{
    return [[null, null, null], [null, null, null], [null, null, null]]
}

export function render(board : (null | string)[][]) : void {
    console.log("   1 2 3");
    console.log("----------")
    console.log(`1| ${board[0].map(i => i ?? " ").join(" ")}`);
    console.log(`2| ${board[1].map(i => i ?? " ").join(" ")}`);
    console.log(`3| ${board[2].map(i => i ?? " ").join(" ")}`);
}