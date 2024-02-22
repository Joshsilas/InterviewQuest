import React from 'react';
import Button from "../Button/index.jsx";
import './PlayerActions.css';

const PlayerActions = ({ onAttack, onUseSkill, disabled  }) => {

    return (
        <div className="player-actions">
            <Button onClick={onAttack} text={"Engage"} disabled={disabled}> </Button>
            <Button onClick={onUseSkill} text={"Use Charm"} disabled={disabled} ></Button>
        </div>
    );
};

export default PlayerActions;