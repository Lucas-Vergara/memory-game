import React, {useState, useEffect} from 'react';

const Scoreboard = () => {
    const [score, setScore] = useState(0);

    return(
        <div id='scoreboard'>
            <span> {score} </span>
        </div>
    )
}

export default Scoreboard