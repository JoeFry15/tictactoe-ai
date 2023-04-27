import { getMove, getWinner, makeMove, newBoard, render } from './game';

let board : (null | string)[][] = newBoard();
let player : string = "X";
let winner : string | null = null;

while (board.some(subArr => subArr.includes(null)) && !winner) {
    render(board);
    const nextMove : [number, number] = getMove();
    makeMove(board, nextMove, player);
    winner = getWinner(board);
    player = player === "X" ? "O" : "X";
}

render(board);

if (winner) {
    console.log(`Player ${winner} wins the game!`)
} else {
    console.log("The game was a draw.")
}