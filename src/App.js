import React, { useState, } from 'react'
import GameStats from './GameStats.js'
// import PlayBtn from './PlayBtn'





function App() {

  const [coinSide, setSide] = useState('?');
  const [totalGames, setTotal] = useState(0);
  const [totalWins, setWin] = useState(0);
  const [totalLoses, setLos] = useState(0);


  function handleChooseHead() {
    setSide('Heads')
    // headSide.current.innerHTML = ('Head');
    // console.log(headSide.current.innerHTML)
  }

  function handleChooseTail() {
    setSide('Tails')
    // headSide.current.innerHTML = ('Tail');
    // console.log(headSide.current)
  }

  const arr = ['Heads', 'Tails']

  function checkWin() {
    console.log(coinSide)
    const indexNumber = (Math.floor(Math.random() * arr.length));
    if (coinSide === '?') {
      console.log(indexNumber)
      alert('Choose Your coin side')
    }
    else if (coinSide === arr[indexNumber]) {
      alert('win');
      setTotal((prevTotal) => prevTotal + 1);
      setSide('?');
      setWin((prevWin) => prevWin + 1);

    } else {
      alert('lose');
      setTotal((prevTotal) => prevTotal + 1);
      setSide('?');
      setLos((prevLos) => prevLos + 1);
    }
  }

  return (
    <>
      <h1>Heads or Tails Game</h1>
      <p>Choose Your coin side</p>
      <button onClick={handleChooseHead}>Heads</button> or <button onClick={handleChooseTail}>Tails</button>
      <p>your choice is: <span>{coinSide}</span></p>
      <button onClick={checkWin}>Play</button>
      <GameStats games={totalGames} wins={totalWins} loses={totalLoses} />
    </>
  );
}

export default App;
