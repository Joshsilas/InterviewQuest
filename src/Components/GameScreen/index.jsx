import React, {useEffect, useState} from 'react';
import Player from "../Player/index.jsx";
import Boss1 from "../Boss1/index.jsx";

const GameScreen = () => {
    const [bossHealth, setBossHealth] = useState(100);
    const [health, setHealth] = useState(10);
    const [charm, setCharm] = useState(10);
    const [isBossAttacking, setIsBossAttacking] = useState(false);

    const handlePlayerAttack = () => {
        setBossHealth((prevHealth) => Math.max(0, prevHealth - 10));
        setIsBossAttacking(true);
    };
    const handleBossAttack = () => {
        setHealth((prevHealth) => Math.max(0, prevHealth - 1));
        setIsBossAttacking(false);
    };

    useEffect(() => {
        if (bossHealth > 0 && isBossAttacking) {
            const bossAttackTimeout = setTimeout(() => {
                handleBossAttack();
            }, 1000); // Adjust the delay as needed
            return () => clearTimeout(bossAttackTimeout);
        }
    }, [bossHealth, isBossAttacking]);

    return (
        <div>
            <Boss1 bossHealth={bossHealth}/>
            <Player onAttack={handlePlayerAttack} health={health} charm={charm}/>
        </div>
    );
};

export default GameScreen;