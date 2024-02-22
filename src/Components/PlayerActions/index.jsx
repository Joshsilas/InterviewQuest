import React, { useState } from 'react';
import Button from "../Button/index.jsx";
import './PlayerActions.css';

const PlayerActions = ({ onAttack, onUseSkill, disabled, isBossAttacking }) => {
    const charmSkills = [
        { name: 'Think about your answer - 3 Charm', description: 'Take a moment to formulate a thoughtful response. Raise interest by 20' },
        { name: 'FACTS AND FIGURES - 4 charm', description: 'Impress them with relevant facts and figures. Raise interest by 30' },
        { name: 'The Ultimate answer - 8 charm', description: 'Unleash the ultimate answer to captivate them. Raise interest by 60' },
        { name: 'Boost your confidence - 3 charm', description: 'Boost your confidence and leave a lasting impression. Heal your confidence 10' },
    ];

    const [isCharmMenuOpen, setIsCharmMenuOpen] = useState(false);

    const handleToggleCharmMenu = () => {
        setIsCharmMenuOpen(!isCharmMenuOpen);
    };

    const handleUseSkill = (selectedSkill) => {
        switch (selectedSkill.name) {
            case 'Think about your answer - 3 Charm':
                onUseSkill(selectedSkill);
                // Deplete 3 charm and affect the boss accordingly
                // You can implement the logic to affect the boss based on this case
                console.log('Thinking about the answer!');
                break;

            case 'FACTS AND FIGURES - 4 charm':
                onUseSkill(selectedSkill);
                // Deplete 4 charm and affect the boss accordingly
                console.log('Impressing with facts and figures!');
                break;

            case 'The Ultimate answer - 8 charm':
                onUseSkill(selectedSkill);
                // Deplete 8 charm and affect the boss accordingly
                console.log('Unleashing the ultimate answer!');
                break;

            case 'Boost your confidence - 3 charm':
                onUseSkill(selectedSkill);
                // Deplete 3 charm and affect the boss accordingly
                // You can implement the logic to affect the boss based on this case
                console.log('Boosting confidence!');
                break;

            default:
                console.log('Unknown skill');
        }

        handleToggleCharmMenu();
    };

    const handleAttack = () => {
        onAttack();
        setIsCharmMenuOpen(false);
    };

    return (
        <div className="player-actions">
            {!isCharmMenuOpen && (
                <>
                    <Button className={"mainButtons"} onClick={handleAttack} text={"Engage"}  disabled={disabled} />
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
                            className="charm-skill-button" // Add this className
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