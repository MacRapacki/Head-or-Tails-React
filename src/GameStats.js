import React from 'react'

const GameStats = (props) => {
    return (
        <>
            <h2>Game statistics</h2>
            <p>Total number of games: <span>{props.games}</span></p>
            <p>Number of wins:  <span>{props.wins}</span></p>
            <p>Number of los:  <span>{props.loses}</span></p>
        </>
    )
}

export default GameStats