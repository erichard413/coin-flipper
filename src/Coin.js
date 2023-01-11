import React from 'react';
import heads from "./heads.png";
import tails from "./tails.png";

const Coin = ({side}) => {
    return <div>
        <img src={side} alt={side}/>
    </div>
}

export default Coin