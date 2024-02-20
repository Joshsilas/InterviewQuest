import React, { useEffect, useState } from 'react';
import Player from "../Player/index.jsx";
import Boss1 from "../Boss1/index.jsx";
import BossPowers from "../BossPowers/index.jsx";

const GameScreen = () => {
    const [bossInterest, setBossInterest] = useState(0);
    const [playerHealth, setPlayerHealth] = useState(10);
    const [charm, setCharm] = useState(10);
    const [isBossAttacking, setIsBossAttacking] = useState(false);

    const handlePlayerAttack = () => {
        setBossInterest((prevHealth) => Math.max(0, prevHealth + 10));
        setIsBossAttacking(true);
    };

    const handleBossAttack = () => {
        setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 1));
        setIsBossAttacking(false);
    };

    const handleBossPowerUsed = () => {
        const shouldAttack = Math.random() < 0.5;
        if (shouldAttack) {
            if (bossInterest > 0 && isBossAttacking) {
                const bossAttackTimeout = setTimeout(() => {
                    handleBossAttack();
                }, 1000);
                return () => clearTimeout(bossAttackTimeout);
            }
        } else {
            const powers = ['generic Question', 'yawn'];
            const randomPower = powers[Math.floor(Math.random() * powers.length)];
            switch (randomPower) {
                case 'genericQuestion':
                    setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 2));
                    break;
                case 'yawn':
                    setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 4));
                    break;
                default:
                    break;
            }
            if (bossInterest === 100) {
                goodInterview();
                setIsBossAttacking(false);
            }
        }
    };

    const goodInterview = () => {
        alert("Aced the interview");
    };

    return (
        <div>
            <Boss1 bossInterest={bossInterest} />
            <BossPowers onBossPowerUsed={handleBossPowerUsed} />
            <Player onAttack={handlePlayerAttack} health={playerHealth} charm={charm} />
        </div>
    );
};

export default GameScreen;