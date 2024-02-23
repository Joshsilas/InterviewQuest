import React, { useState } from 'react';
import Button from "../Button/index.jsx";
import './PlayerActions.css';

const PlayerActions = ({ onAttack, onUseSkill, disabled, isBossAttacking, charmSkills, selectedSkill, setSelectedSkill }) => {
    const [isCharmMenuOpen, setIsCharmMenuOpen] = useState(false);


    const handleToggleCharmMenu = () => {
        setIsCharmMenuOpen(!isCharmMenuOpen);
    };

    const handleAttack = () => {
        onAttack();
        setIsCharmMenuOpen(false);
    };

    const handleUseSkill = (skill) => {
        setSelectedSkill(skill);
        onUseSkill(skill);
        setIsCharmMenuOpen(false);
    };

    return (
        <div className="player-actions">
            {!isCharmMenuOpen && (
                <>
                    <Button className={"mainButtons"} onClick={handleAttack} text={"Engage"} disabled={disabled} />
                    <Button className={"mainButtons"} onClick={handleToggleCharmMenu} text={"Use Charm"} disabled={disabled} />
                </>
            )}

            {isCharmMenuOpen && !isBossAttacking && (
                <div className="charm-skills">
                    {charmSkills.map((skill, index) => (
                        <Button
                            key={index}
                            onClick={() => handleUseSkill(skill)}
                            text={skill.name}
                            disabled={disabled}
                            className="charm-skill-button"
                            data-hover-message={skill.description}
                        />
                    ))}
                    <Button onClick={handleToggleCharmMenu} text={"Back to menu"} disabled={disabled} />
                </div>
            )}
        </div>
    );
};

export default PlayerActions;