import React, { useState } from 'react';
import PlayerActions from "../PlayerActions/index.jsx";
import './Player.css';

const Player = ({onAttack, onUseSkill, health, charm}) => {


    return (
        <div className="player-container">
            <h2>Hopeful Candidate</h2>
            <p>Confidence: {health}</p>
            <p>Charm: {charm}</p>
            <PlayerActions onAttack={onAttack} onUseSkill={onUseSkill} />
        </div>
    );
};

export default Player;