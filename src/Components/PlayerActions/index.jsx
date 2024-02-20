import React from 'react';

const PlayerActions = ({ onAttack, onUseSkill }) => {
    return (
        <div className="player-actions-container">
            <button onClick={onAttack}>Attack</button>
            <button onClick={onUseSkill}>Use Skill</button>
        </div>
    );
};

export default PlayerActions;