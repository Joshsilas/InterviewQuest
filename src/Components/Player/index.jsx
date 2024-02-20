import React from 'react';
import PlayerActions from "../PlayerActions/index.jsx";

const Player = ({ health, skills }) => {
    return (
        <div className="player-container">
            <h2>Player</h2>
            <p>Health: {health}</p>
            <p>Skills: {skills}</p>
            <PlayerActions />
        </div>
    );
};

export default Player;