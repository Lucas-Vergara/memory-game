import React from 'react';

const Card = (props) => {
    const [src, name, halp, gameLogic] = [props.src, props.name, props.halp, props.gameLogic]
    return (
        <div>
            <div id="card">
                <img src={src} className='image' alt={name} key={halp} onClick={gameLogic.bind(this, name)} />
            </div>
        </div>
    )
}


export default Card