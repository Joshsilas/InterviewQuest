import React, { useEffect, useState } from 'react';
import Player from "../Player/index.jsx";
import Boss from "../Boss/index.jsx";
import './CeoLevel.css';
import {useNavigate} from "react-router-dom";

const CeoLevel = () => {
    const navigate = useNavigate();
    const [bossInterest, setBossInterest] = useState(0);
    const [playerHealth, setPlayerHealth] = useState(50);
    const [charm, setCharm] = useState(50);
    const [isBossAttacking, setIsBossAttacking] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedPower, setSelectedPower] = useState(null);
    const [powerText, setPowerText] = useState("");
    const charmSkills = [
        { name: 'Bug Squashing - 3 Charm', description: 'You know how to debug that. Raise interest by 30' },
        { name: 'In-Depth Technical Explanation - 4 charm', description: 'Provide an in-depth explanation of a technical concept. Raise interest by 40' },
        { name: 'Complex Algorithm - 10 charm', description: "Bodmas, loops, recursion, data structures, and optimization techniques. You've got this . Raise interest by 80" },
        { name: 'Boost your confidence - 3 charm', description: 'Boost your confidence and leave a lasting impression. Heal your confidence 15' },
    ];
    const powers = ['shouts Fizz Buzz at you', 'asks why you did it in React', "says you've missed a semi colon", 'affirms with a thoughtful nod', 'just shakes their head'];
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (playerHealth === 0) {
            badInterview();
        }
        if (bossInterest >= 500) {
            goodInterview();
        }
    }, [playerHealth, bossInterest]);

    const handlePlayerAttack = () => {
        setBossInterest((prevInterest) => Math.min(500, prevInterest + 20));

        setTimeout(() => {
            setIsBossAttacking((prevIsBossAttacking) => !prevIsBossAttacking);
        }, 500);
    }

    const handleUseSkill = (selectedSkill) => {
        if (selectedSkill.name.includes('charm') && charm === 0) {
            setErrorMessage('Not enough charm to use this skill!');
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);
            return;
        }
        switch (selectedSkill.name) {
            case 'Bug Squashing - 3 Charm':
                if (charm >= 3) {
                    setCharm((prevCharm) => Math.max(0, prevCharm - 3));
                    setBossInterest((prevInterest) => Math.min(500, prevInterest + 30));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            case 'In-Depth Technical Explanation - 4 charm':
                if (charm >= 4) {
                    setCharm((prevCharm) => Math.max(0, prevCharm - 4));
                    setBossInterest((prevInterest) => Math.min(500, prevInterest + 40));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            case 'Complex Algorithm - 10 charm':
                if (charm >= 10) {
                    setCharm((prevCharm) => Math.max(0, prevCharm - 10));
                    setBossInterest((prevInterest) => Math.min(500, prevInterest + 80));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            case 'Boost your confidence - 3 charm':
                if (charm >= 3) {
                    setCharm((prevCharm) => Math.max(0, prevCharm - 3));
                    setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 15));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            default:
        } setTimeout(() => {
            setIsBossAttacking((prevIsBossAttacking) => !prevIsBossAttacking);

        }, 1000);
        setErrorMessage("");
    };

    const handleBossPowerUsed = () => {
        const randomPower = powers[Math.floor(Math.random() * powers.length)];
        setSelectedPower(randomPower);

        switch (randomPower) {
            case 'shouts Fizz Buzz at you':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 4));
                setPowerText("You've lost 4 confidence");
                break;
            case 'asks why you did it in React':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 8));
                setPowerText("You've lost 8 confidence");
                break;
            case "says you've missed a semi colon" :
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 2));
                setPowerText("You've lost 2 confidence");
                break;
            case 'affirms with a thoughtful nod':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 4));
                setPowerText("You've gained 4 confidence");
                break;
            case 'just shakes their head':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 6));
                setPowerText("You've lost 6 confidence");
                break;
            default:
                break;
        }

        setTimeout(() => {
            setIsBossAttacking(false);
        }, 3000);
    };

    const goodInterview = () => {
        setIsBossAttacking(false);
        setTimeout(() => {
            navigate("/IntroToCeo/");
        }, 2000);
    };


    const badInterview = () => {
        setTimeout(() => {
            navigate("/failedInterview/");
        }, 2000);
    };

    useEffect(() => {
        if (isBossAttacking) {
            handleBossPowerUsed();
        }
    }, [isBossAttacking]);

    return (
        <>
            <Boss bossName={"CTO Interest:"} bossInterest={bossInterest} maxInterest={500} />
            <div className="recruiterLevel">
                <img className="bossImage" src="/src/assets/ceo.jpg" />
            </div>
            <div className="boss-powers-layout">
                {isBossAttacking ? null : <p className="boss-powers">The CEO is judging you...</p>}
                {errorMessage && <p className="boss-powers">{errorMessage}</p>}
                {isBossAttacking && <p className="boss-powers">The CEO {selectedPower}</p>}
                {isBossAttacking && <p className="boss-powers">{powerText}</p>}
            </div>
            <Player
                playerName="Candidate Of Destiny"
                onAttack={handlePlayerAttack}
                onUseSkill={handleUseSkill}
                health={playerHealth}
                charm={charm}
                isBossAttacking={isBossAttacking}
                charmSkills={charmSkills}
                selectedSkill={selectedSkill}
                setSelectedSkill={setSelectedSkill}
            />
        </>
    );
};

export default CeoLevel;