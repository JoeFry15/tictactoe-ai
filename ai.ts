import { getMove, getWinner, makeMove } from "./game";

export function minimaxAi(board: (null | string)[][], player: string) : [number, number] {
    const emptySpaces : [number, number][] = [];
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          if (board[row][col] === null) {
            emptySpaces.push([row+1, col+1]);
          }
        }
      }

    for (const iterator of emptySpaces) {
        const testBoard : (string | null)[][] = board.map(i => i.slice());
        makeMove(testBoard, iterator, player);
        const winner = getWinner(testBoard);
        if (winner === player) return iterator;
    }

    for (const iterator of emptySpaces) {
        const testBoard : (string | null)[][] = board.map(i => i.slice());
        const otherPlayer : string = player === "X" ? "O" : "X"
        makeMove(testBoard, iterator, otherPlayer);
        const winner = getWinner(testBoard);
        if (winner === otherPlayer) return iterator;
    }

    return emptySpaces[Math.floor(Math.random() * emptySpaces.length)]
}

export function randomAi(board: (null | string)[][], player: string) : [number, number] {
    const emptySpaces : [number, number][] = [];
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          if (board[row][col] === null) {
            emptySpaces.push([row+1, col+1]);
          }
        }
      }
    return emptySpaces[Math.floor(Math.random() * emptySpaces.length)]
}

export function findWinningMovesAi(board: (null | string)[][], player: string) : [number, number] {
    const emptySpaces : [number, number][] = [];
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          if (board[row][col] === null) {
            emptySpaces.push([row+1, col+1]);
          }
        }
      }

    for (const iterator of emptySpaces) {
        const testBoard : (string | null)[][] = board.map(i => i.slice());
        makeMove(testBoard, iterator, player);
        const winner = getWinner(testBoard);
        if (winner === player) return iterator;
    }

    return emptySpaces[Math.floor(Math.random() * emptySpaces.length)]
}

export function findWinningAndLosingMovesAi(board: (null | string)[][], player: string) : [number, number] {
    const emptySpaces : [number, number][] = [];
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          if (board[row][col] === null) {
            emptySpaces.push([row+1, col+1]);
          }
        }
      }

    for (const iterator of emptySpaces) {
        const testBoard : (string | null)[][] = board.map(i => i.slice());
        makeMove(testBoard, iterator, player);
        const winner = getWinner(testBoard);
        if (winner === player) return iterator;
    }

    for (const iterator of emptySpaces) {
        const testBoard : (string | null)[][] = board.map(i => i.slice());
        const otherPlayer : string = player === "X" ? "O" : "X"
        makeMove(testBoard, iterator, otherPlayer);
        const winner = getWinner(testBoard);
        if (winner === otherPlayer) return iterator;
    }

    return emptySpaces[Math.floor(Math.random() * emptySpaces.length)]
}

export function humanPlayer(board: (null | string)[][], player: string) : [number, number] {
    return getMove();
}


