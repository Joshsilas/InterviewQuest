import React, { useState } from 'react';
import PlayerActions from "../PlayerActions/index.jsx";

const Player = ({ morale, charm }) => {
    const [health, setHealth] = useState(10);
    const [skill, setSkill] = useState(10);

    return (
        <div className="player-container">
            <h2>Player</h2>
            <p>Morale: {health}</p>
            <p>Charm: {skill}</p>
            <PlayerActions />
        </div>
    );
};

export default Player;