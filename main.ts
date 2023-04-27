import { findWinningAndLosingMovesAi, findWinningMovesAi, humanPlayer, randomAi } from './ai';
import { getMove, getWinner, makeMove, newBoard, render } from './game';

function main(playerOne: (board: (null | string)[][], player: string) => [number, number], playerTwo: (board: (null | string)[][], player: string) => [number, number], theWinner: [number, number, number]) : void {
    let board : (null | string)[][] = newBoard();
    let player : string = "X";
    let winner : string | null = null;

    while (board.some(subArr => subArr.includes(null)) && !winner) {
        // render(board);
        
        if (player === "X") {
            const nextMove : [number, number] = playerOne(board, player);
            makeMove(board, nextMove, player);
        } else {
            const nextMove : [number, number] = playerTwo(board, player);
            makeMove(board, nextMove, player);
        }

        winner = getWinner(board);

        player = player === "X" ? "O" : "X";
    }

    // render(board);

    if (winner === "X") {
        theWinner[0]++
    } else if (winner === "O") {
        theWinner[1]++;
    } else {
        theWinner[2]++;
    }
    

    // if (winner) {
    //     console.log(`Player ${winner} wins the game!`)
    // } else {
    //     console.log("The game was a draw.")
    // }
}

const winningStats : [number, number, number] = [0, 0, 0];

for (let i = 0; i < 1000000; i++) {
    main(randomAi, findWinningAndLosingMovesAi, winningStats); 
}

console.log(winningStats);