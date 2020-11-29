import React, { useState} from 'react';
import '../App.scss';
import Board from './board'

const Game = () => {

    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [selected, setSelected] = useState([]);

    const gameLogic = (cardName) => {

        if(!selected.includes(cardName)){
            selected.push(cardName)
            setScore(score+1)
            if(highScore <= score) {
                setHighScore(highScore+1)
            }
        } else {
            setSelected([])
            setScore(0)
            alert('Oops, you lose. Better luck next time')
        }
    }

    if(score === 12) {
        alert('You win! Congratulation!')
        setSelected([])
        setScore(0)
    }



    return (
        <div>
            < Board score={score} highScore={highScore} gameLogic={gameLogic}/>
        </div>
        )
    }
  
export default Game