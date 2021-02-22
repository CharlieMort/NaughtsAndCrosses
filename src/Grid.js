import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Grid = () => {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [turn, setTurn] = useState("X");
    const [status, setStatus] = useState("Next Player: X");

    const handleClick = (index) => {
        if (board[index] != null || CheckWin(board)) return;
        let newBoard = board.slice();
        newBoard[index] = turn;
        setBoard(newBoard);
        if (turn == "X") setTurn("O");
        else setTurn("X");
    }

    const UpdateStatus = () => {
        const winner = CheckWin(board);
        let text;
        if (winner) {
            text = winner + " WINS!!!!";
        } else {
            text = "Next Player: " + turn;
        }
        setStatus(text);
    }

    const CheckWin = (grid) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i<lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
                return board[a];
            }
        }
        return null;
    }

    useEffect(UpdateStatus);

    return(
        <div className="grid">
            {board.map((value, index) => {
                return <Cell key={index} value={value} clickFunc={() => handleClick(index)}/>
            })}
            <h1>{status}</h1>
        </div>
    )
}

export default Grid;