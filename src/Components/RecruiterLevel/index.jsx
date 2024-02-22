import React, { useEffect, useState } from 'react';
import Player from "../Player/index.jsx";
import Boss from "../Boss/index.jsx";
import './Recruiterlevel.css';

const RecruiterLevel = () => {
    const [bossInterest, setBossInterest] = useState(0);
    const [playerHealth, setPlayerHealth] = useState(10);
    const [charm, setCharm] = useState(10);
    const [isBossAttacking, setIsBossAttacking] = useState(false);
    const [selectedPower, setSelectedPower] = useState(null);

    const powers = ['Asks you a generic Question', 'Yawns', 'Stares blankly', "Seems Interested"];

    useEffect(() => {
        if (playerHealth === 0) {
            badInterview();
        }
        if (bossInterest >= 100) {
            goodInterview();
        }
    }, [playerHealth, bossInterest]);

    const handlePlayerAttack = () => {
        console.log("Before player attack - bossInterest:", bossInterest);
        setBossInterest((prevInterest) => {
            const newInterest = Math.min(100, prevInterest + 10);
            console.log("Updated bossInterest:", newInterest);
            return newInterest;
        });

        setTimeout(() => {
            setIsBossAttacking((prevIsBossAttacking) => {
                console.log("Updated isBossAttacking:", !prevIsBossAttacking);
                return !prevIsBossAttacking;
            });
        }, 700);


        setTimeout(() => {
            console.log("After player attack - bossInterest:", bossInterest);
            console.log("player attacked");
        }, 1000);
    };

    const handleBossPowerUsed = () => {
        const randomPower = powers[Math.floor(Math.random() * powers.length)];
        setSelectedPower(randomPower);

        switch (randomPower) {
            case 'Asks you a generic Question':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 1));
                console.log("generic question used");
                break;
            case 'Yawns':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 3));
                console.log("Yawn used");
                break;
            case 'Stares blankly':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 2));
                console.log("hmmm used");
                break;
            case 'Seems Interested':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 2));
                console.log("hmmm used");
                break;
            default:
                break;
        }

        setTimeout(() => {
            setIsBossAttacking(false);
        }, 1500);
    };

    const goodInterview = () => {
        alert("Aced the interview");
    };
    const badInterview = () => {
        alert("Failed the interview");
    };

    useEffect(() => {
        if (isBossAttacking) {
            handleBossPowerUsed();
        }
    }, [isBossAttacking]);

    return (
        <div className="recruiterLevel">
            <Boss bossInterest={bossInterest} />
            {isBossAttacking ? null : <p className="boss-powers">The Recruiter is watching you...</p>}
            {isBossAttacking && <p className="boss-powers">The Recruiter {selectedPower}</p>}
            <Player onAttack={handlePlayerAttack} health={playerHealth} charm={charm} disabled={isBossAttacking} />
        </div>
    );
};

export default RecruiterLevel;