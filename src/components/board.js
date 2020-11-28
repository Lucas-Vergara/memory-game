import React, { useEffect, useState } from 'react';
import '../App.scss';
import Card from './card'
import bass from '../images/bass.png'
import  bongo from '../images/bongo.png'
import clarinet from '../images/clarinet.png'
import conga from '../images/conga.png'
import guitar from '../images/guitar.png'
import harp from '../images/harp.png'
import maracas from '../images/maracas.png'
import medieval from '../images/medieval.png'
import organ from '../images/organ.png'
import sax from '../images/sax.png'
import sitar from '../images/sitar.png'
import violin from '../images/violin.png'


function Board (props) {

    const {score, highScore, gameLogic} = props

    const images = [
        {
            src: bass,
            name: 'bass'
        },
        {
            src: bongo,
            name: 'bongo'
        },
        {
            src: clarinet,
            name: 'clarinet'
        },
        {
            src: conga,
            name: 'conga'
        },
        {
            src: guitar,
            name: 'guitar'
        },
        {
            src: harp,
            name: 'harp'
        },
        {
            src: maracas,
            name: 'maracas'
        },
        {
            src: medieval,
            name: 'medieval'
        },
        {
            src: organ,
            name: 'organ'
        },
        {
            src: sax,
            name: 'sax'
        },
        {
            src: sitar,
            name: 'sitar'
        },
        {
            src: violin,
            name: 'violin'
        },
    ]

    const [cards, setNewCards] = useState(images);

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
    };

    useEffect(()=> {
        const newCards = [...cards];
        shuffle(newCards)
        setNewCards(newCards)
    }, [score, highScore])

    return (
        <div>
                <div id='scoreboard'>
                    <span> Score: {score} </span>
                    <span> Highscore: {highScore} </span>
                </div>
                <div id="gameboard">
                    {cards.map((card) => (
                    <Card src={card.src} name={card.name} key={card.name} gameLogic={gameLogic} />
                    ))}
                </div>

        </div>
    )


}


export default Board