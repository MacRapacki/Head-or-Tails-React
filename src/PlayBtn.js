import React from 'react'

const checkWin = (coin) => {
    console.log(coin)
    if (coin === '?') {
        alert('Choose Your coin side');

    }
};

const PlayBtn = (coin) => {
    return (
        <>
            <button onClick={checkWin} coin={coin}> Play! </button>
        </>
    )
}


export default PlayBtn