import React, { useState } from 'react';
import PlayerActions from "../PlayerActions/index.jsx";
import './Player.css';

const Player = ({ onAttack, onUseSkill, health, charm, lockButton, charmSkills, selectedSkill, setSelectedSkill, playerName, engage, charmButton  }) => {
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
                    disabled={lockButton}
                    charmSkills={charmSkills}
                    selectedSkill={selectedSkill}
                    setSelectedSkill={setSelectedSkill}
                    engage={engage}
                    charmButton={charmButton}
                />
            </div>
        </div>
    );
};

export default Player;