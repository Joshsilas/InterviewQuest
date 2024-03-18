import React, { useState } from 'react';
import Button from "../Button/index.jsx";
import './PlayerActions.css';

const PlayerActions = ({ onAttack, onUseSkill, disabled, isBossAttacking, charmSkills, selectedSkill, setSelectedSkill, engage, charmButton }) => {
    const [isCharmMenuOpen, setIsCharmMenuOpen] = useState(false);
    const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

    const handleToggleCharmMenu = () => {
        setIsCharmMenuOpen(!isCharmMenuOpen);
    };

    const handleToggleHelpMenu = () => {
        setIsHelpMenuOpen(!isHelpMenuOpen);
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
            {!isCharmMenuOpen && !isHelpMenuOpen &&(
                <div className="playerButtonsLayout">
                    <Button className={"engageButton"} onClick={handleAttack} text={"Engage"} disabled={disabled} />
                    <Button className={"charmButton"} onClick={handleToggleCharmMenu} text={"Use Charm"} disabled={disabled} />
                </div>
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

            {!isHelpMenuOpen && !isCharmMenuOpen &&(
                <div className="helpBarLayout">
                    <Button className="helpBar" text={"Help"} onClick={handleToggleHelpMenu} disabled={disabled}></Button>
                </div>
            )}

            {isHelpMenuOpen && !isBossAttacking &&  (
                <div className="helpMenu">
                    <p>Your confidence is like your health, if it reaches 0, you fail the interview.</p>
                    <p>Charm is your special ability points.</p>
                    <p>Engage will raise the interviewers interest by a small amount without costing any charm. Think of it as your basic attack.</p>
                    <p>Use Charm will open your special abilities menu. These abilities cost charm to use, so use wisely as you only have a certain amount.</p>
                    <p>The interviewer will always respond, sometimes positively, sometimes negatively.</p>
                    <p>Raise their interest to max to pass the interview.</p>
                    <Button onClick={handleToggleHelpMenu} text={"Close"} disabled={disabled} />
                </div>
            )}
        </div>
    );
};

export default PlayerActions;