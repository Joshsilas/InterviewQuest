import React from 'react';

const Player = ({ health, skills }) => {
    return (
        <div className="player-container">
            <h2>Player</h2>
            <p>Health: {health}</p>
            <p>Skills: {skills}</p>
        </div>
    );
};

export default Player;