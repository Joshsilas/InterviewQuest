import React from 'react';
import Button from "../Button/index.jsx";

const PlayerActions = ({ onAttack, onUseSkill }) => {
    return (
        <div className="player-actions-container">
            <Button onClick={onAttack} text={"Use Talk"}> </Button>
            <Button onClick={onUseSkill} text={"Use Skill"} ></Button>
        </div>
    );
};

export default PlayerActions;