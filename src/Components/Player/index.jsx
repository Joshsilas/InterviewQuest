import React, { useState } from 'react';
import PlayerActions from "../PlayerActions/index.jsx";

const Player = ({onAttack, onUseSkill, health, charm}) => {


    return (
        <div className="player-container">
            <h2>Player</h2>
            <p>Morale: {health}</p>
            <p>Charm: {charm}</p>
            <PlayerActions onAttack={onAttack} onUseSkill={onUseSkill} />
        </div>
    );
};

export default Player;