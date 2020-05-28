import React from 'react';
import './styles/GameStats.css';


const GameStats = (props) => {
    return (
        <>
            <h2>Game statistics</h2>
            <p className="bottom_stats">Total number of games: <span>{props.games}</span></p>
            <p className="bottom_stats">Number of wins:  <span>{props.wins}</span></p>
            <p className="bottom_stats">Number of los:  <span>{props.loses}</span></p>
        </>
    )
}

export default GameStats