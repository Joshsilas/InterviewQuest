import React, { useState } from 'react';
import PlayerActions from "../PlayerActions/index.jsx";
import './Player.css';

const Player = ({onAttack, onUseSkill, health, charm, isBossAttacking}) => {


    return (
        <div className="playerLayout">
        <div className="player-container">
            <h2>Hopeful Candidate</h2>
            <p>Confidence: {health}</p>
            <p>Charm: {charm}</p>
            <PlayerActions onAttack={onAttack} onUseSkill={onUseSkill} isBossAttacking={isBossAttacking}/>
            </div>
        </div>
    );
};

export default Player;