import React from 'react';
import Player from "../Player/index.jsx";
import Boss1 from "../Boss1/index.jsx";

const GameScreen = () => {
    return (
        <div>
            <Boss1 />
            <Player />
        </div>
    );
};

export default GameScreen;