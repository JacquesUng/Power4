import React, { useState } from 'react';
import { columnFull, gameWon } from '../services/utils';

import '../styles/Board.css';

interface BoardPropsType {
    turn: number;
    switchTurn: () => void;
    message: string;
    setMessage: (message: string) => void;
}

function Board({turn, switchTurn, message, setMessage}: BoardPropsType) {
    const initialBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];

    const [board, setBoard] = useState(initialBoard);

    const [end, setEnd] = useState(false);

    const color = (cell: number): string => {
        return cell? (cell === 1? "red": "yellow"): "white";
    }

    const playTurn = (col_i: number): void => {
        if (!end) {
            let row_i = 5;
            while (row_i >= 0 && board[col_i][row_i] > 0) {
                row_i--;
            }
            if (row_i >= 0) {
                board[col_i][row_i] = turn? 2: 1;
                setBoard(board);
    
                if (gameWon(board, col_i, row_i)) {
                    setMessage(`Player ${turn + 1} has won !`);
                    setEnd(true);
                    return;
                }
                switchTurn();
            }
        }
    }

    return (
        <div className="board">
            {board.map((col, col_i) => {
                let className = 'col';
                if (end) {
                    className += ' end';
                } else {
                    if (columnFull(board, col_i)) {
                        className += ' full';
                    } else {
                        className += ' ongoing'
                    }
                }

                return (
                    <div key={`col_${col_i}`} className={className} onClick={() => playTurn(col_i)}>
                        {col.map((cell, row_i) => {
                            return (
                                <div key={`col_${col_i}_row_${row_i}`} className="cell">
                                    {true && <div className="token" style={{backgroundColor: color(cell)}} />}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

export default Board
