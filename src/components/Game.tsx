import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Game.css';
import Board from './Board';

function Game() {
    const history = useHistory();

    const username1 = localStorage.getItem('username1');
    const username2 = localStorage.getItem('username2');

    const initialTurn = Math.floor(Math.random() * 2);
    const [turn, setTurn] = useState(initialTurn);

    const [message, setMessage] = useState('');

    const handleNavigateBack = () => {
        history.push("/");
    }

    const switchTurn = () => {
        setTurn(turn? 0: 1);
    }

    return (
        <div className="game">
            <div className="header">
                <div className="names">
                    <div className="name" style={{fontWeight: turn? 400: 600}} >
                        <div className="label">Player 1:</div>
                        <div className="value">{username1}</div>
                    </div>

                    <div className="name" style={{fontWeight: turn? 600: 400}}>
                        <div className="label">Player 2:</div>
                        <div className="value">{username2}</div>
                    </div>
                </div>
                
                <div className="back">
                    <button className="button" onClick={handleNavigateBack}>Retour</button>
                </div>
            </div>

            <div className="messageContainer">
                <div className="message">{message}</div>
            </div>

            <div className="boardContainer">
                <Board turn={turn} switchTurn={switchTurn} message={message} setMessage={setMessage}/>
            </div>
        </div>
    );
}

export default Game
