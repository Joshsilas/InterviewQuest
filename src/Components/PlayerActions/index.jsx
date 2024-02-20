import React from 'react';
import Button from "../Button/index.jsx";

const PlayerActions = ({ onAttack, onUseSkill }) => {

    return (
        <div className="player-actions-container">
            <Button onClick={onAttack} text={"Engage"}> </Button>
            <Button onClick={onUseSkill} text={"Use Charm"} ></Button>
        </div>
    );
};

export default PlayerActions;