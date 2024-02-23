import React, { useState } from 'react';
import PlayerActions from "../PlayerActions/index.jsx";
import './Player.css';

const Player = ({ onAttack, onUseSkill, health, charm, isBossAttacking, charmSkills, selectedSkill, setSelectedSkill, playerName  }) => {
    const handleUseSkill = (skill) => {
        setSelectedSkill(skill);
        onUseSkill(skill);
    };

    return (
        <div className="playerLayout">
            <div className="player-container">
                <h2>{playerName}</h2>
                <p>Confidence: {health}</p>
                <p>Charm: {charm}</p>
                <PlayerActions
                    onAttack={onAttack}
                    onUseSkill={handleUseSkill}
                    disabled={isBossAttacking}
                    charmSkills={charmSkills}
                    selectedSkill={selectedSkill}
                    setSelectedSkill={setSelectedSkill}
                />
            </div>
        </div>
    );
};

export default Player;