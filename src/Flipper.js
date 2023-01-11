import React, {useState} from 'react';
import Coin from './Coin';
import heads from "./heads.png";
import tails from "./tails.png";

const randomSide = () => {
    let idx = Math.floor(Math.random()*2 +1);
    if (idx === 1) {
        return heads
    } else {
        return tails
    }
}



const Flipper = () => {

    const [side, setSide] = useState(null)
    const [flipCount, setFlipCount] = useState(0);
    const [headsCount, setHeadsCount] = useState(0);

    const buttonFlip =()=> {
    let newSide = randomSide();
    setSide(newSide)
    setFlipCount(flipCount +1)
    {newSide == heads ? setHeadsCount(headsCount + 1) : setHeadsCount(headsCount)}
    }

    return (
        <div className="Flipper">
            {flipCount > 0 ? <><Coin side={side}/> <p className="Flipper-Counts">Out of {flipCount} flips, there have been {headsCount} heads and {flipCount - headsCount} tails.</p></> : null}
            <button className="Flipper-btn" onClick={buttonFlip}>Let's Flip It!</button>
        </div>
    )
}

export default Flipper;