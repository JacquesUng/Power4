import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Usernames.css';

function Usernames() {
    localStorage.setItem('username1', '');
    localStorage.setItem('username2', '');

    const history = useHistory();

    const [username1, setUsername1] = useState("");
    const [username2, setUsername2] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        localStorage.setItem('username1', username1);
        localStorage.setItem('username2', username2);
        history.push('/game');
    }

    const handleChange = (event: any) => {
        const maxLength = 20;
        switch(event.target?.name) {
            case "username1":
                if (event.target.value.length <= maxLength) {
                    setUsername1(event.target.value);
                }
                break;
            case "username2":
                if (event.target.value.length <= maxLength) {
                    setUsername2(event.target.value);
                }
                break;
            default:
                break;
        }
    }

    const disabled = () => {
        return username1 === "" || username2 === "" || username1 === username2;
    }

    return (
        <div className="usernames">
            <form className="form" onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="field">
                        <div className="token" style={{ backgroundColor: 'red' }} />
                        <label className="label">Player 1</label>
                        <input
                            type="text"
                            className="value"
                            name="username1"
                            value={username1}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="field">
                        <div className="token" style={{ backgroundColor: 'yellow' }} />
                        <label className="label">Player 2</label>
                        <input
                            type="text"
                            className="value"
                            name="username2"
                            value={username2}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className="actions">
                    <input className="submit" type="submit" disabled={disabled()} value="Start" />
                </div>
            </form>
        </div>
    )
}

export default Usernames
