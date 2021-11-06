import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import Game from './components/Game';
import Usernames from './components/Usernames';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Usernames />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
