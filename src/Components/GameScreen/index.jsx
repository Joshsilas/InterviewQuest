import React, {useEffect, useState} from 'react';
import Player from "../Player/index.jsx";
import Boss1 from "../Boss1/index.jsx";

const GameScreen = () => {
    const [bossInterest, setBossInterest] = useState(0);
    const [health, setHealth] = useState(10);
    const [charm, setCharm] = useState(10);
    const [isBossAttacking, setIsBossAttacking] = useState(false);

    const handlePlayerAttack = () => {
        setBossInterest((prevHealth) => Math.max(0, prevHealth + 10));
        setIsBossAttacking(true);
    };
    const handleBossAttack = () => {
        setHealth((prevHealth) => Math.max(0, prevHealth - 1));
        setIsBossAttacking(false);
    };

    useEffect(() => {
        if (bossInterest === 100) {
            goodInterview();
            setIsBossAttacking(false);
            return;
        }
        if (bossInterest > 0 && isBossAttacking) {
            const bossAttackTimeout = setTimeout(() => {
                handleBossAttack();
            }, 1000);
            return () => clearTimeout(bossAttackTimeout);
        }
    }, [bossInterest, isBossAttacking]);

    const goodInterview = () =>
    {
        if(bossInterest === 100)
        {
            alert("aced the interview")
        }
    }

    return (
        <div>
            <Boss1 bossInterest={bossInterest}/>
            <Player onAttack={handlePlayerAttack} health={health} charm={charm}/>
        </div>
    );
};

export default GameScreen;