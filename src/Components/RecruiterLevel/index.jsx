import React, { useEffect, useState } from 'react';
import Player from "../Player/index.jsx";
import Boss from "../Boss/index.jsx";
import './Recruiterlevel.css';
import {useNavigate} from "react-router-dom";
import soundClip from '/src/assets/officesound.mp3';

const RecruiterLevel = () => {
    const navigate = useNavigate();
    const [bossInterest, setBossInterest] = useState(0);
    const [playerHealth, setPlayerHealth] = useState(10);
    const [charm, setCharm] = useState(10);
    const [isBossAttacking, setIsBossAttacking] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedPower, setSelectedPower] = useState(null);
    const [powerText, setPowerText] = useState("");
    const [lockButton, setLockedButton] = useState(false)
    const charmSkills = [
        { name: 'Think about your answer - 3 Charm', description: 'Take a moment to formulate a thoughtful response. Raise interest by 20' },
        { name: 'FACTS AND FIGURES - 4 charm', description: 'Impress them with relevant facts and figures. Raise interest by 30' },
        { name: 'The Ultimate answer - 8 charm', description: 'Unleash the ultimate answer to captivate them. Raise interest by 60' },
        { name: 'Boost your confidence - 3 charm', description: 'Boost your confidence and leave a lasting impression. Heal your confidence 10' },
    ];
    const powers = ['Asks you a generic Question', 'Yawns', 'Stares blankly', 'Seems Interested'];
    const [errorMessage, setErrorMessage] = useState("");
    const audioElement = new Audio(soundClip);
    audioElement.loop = true;

    const playSound = () => {
        if (audioElement.readyState >= 2) {
            if (audioElement.paused) {
                audioElement.play()
                    .then(() => console.log('Audio play success'))
                    .catch(error => {
                        console.error('Error playing audio:', error);
                    });
            }
        } else {
            console.error('Audio not loaded');
        }
    };
    const stopSound = () => {
        if (!audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    };
    useEffect(() => {
        const handleCanPlay = () => {
            playSound();
        };
        audioElement.addEventListener('canplay', handleCanPlay);
        return () => {
            audioElement.removeEventListener('canplay', handleCanPlay);
            stopSound();
        };
    }, []);

    useEffect(() => {
        if (playerHealth === 0) {
            stopSound();
            badInterview();
        }
        if (bossInterest >= 100) {
            stopSound();
            goodInterview();
        }
    }, [playerHealth, bossInterest]);

    const handlePlayerAttack = () => {
        setBossInterest((prevInterest) => Math.min(100, prevInterest + 10));
        setLockedButton(true)
        setTimeout(() => {
            setIsBossAttacking((prevIsBossAttacking) => !prevIsBossAttacking);
        }, 1000);
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
            case 'Think about your answer - 3 Charm':
                if (charm >= 3) {
                    setLockedButton(true)
                    setCharm((prevCharm) => Math.max(0, prevCharm - 3));
                    setBossInterest((prevInterest) => Math.min(100, prevInterest + 20));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            case 'FACTS AND FIGURES - 4 charm':
                if (charm >= 4) {
                    setLockedButton(true)
                setCharm((prevCharm) => Math.max(0, prevCharm - 4));
                setBossInterest((prevInterest) => Math.min(100, prevInterest + 30));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            case 'The Ultimate answer - 8 charm':
                if (charm >= 8) {
                    setLockedButton(true)
                setCharm((prevCharm) => Math.max(0, prevCharm - 8));
                setBossInterest((prevInterest) => Math.min(100, prevInterest + 60));
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
                    setLockedButton(true)
                setCharm((prevCharm) => Math.max(0, prevCharm - 3));
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 10));
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
            case 'Asks you a generic Question':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 1));
                setPowerText("You've lost 1 confidence");
                break;
            case 'Yawns':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 3));
                setPowerText("You've lost 3 confidence");
                break;
            case 'Stares blankly':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 2));
                setPowerText("You've lost 2 confidence");
                break;
            case 'Seems Interested':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 2));
                setPowerText("You've gained 2 confidence");
                break;
            default:
                break;
        }

        setTimeout(() => {
            setIsBossAttacking(false);
            setLockedButton(false)
        }, 3500);
    };

    const goodInterview = () => {
        setIsBossAttacking(false);
        setTimeout(() => {
            navigate("/IntroToCto/");
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
            <Boss bossName={"Recruiter Interest:"} bossInterest={bossInterest} maxInterest={100}/>
            <div className="recruiterLevel">
                <img className="bossImage" src="/src/assets/recruiter.jpg" />
            </div>
            <div className="boss-powers-layout">
                {isBossAttacking ? null : <p className="boss-powers">The Recruiter is watching you...</p>}
                {errorMessage && <p className="boss-powers">{errorMessage}</p>}
                {isBossAttacking && <p className="boss-powers">The Recruiter {selectedPower}</p>}
                {isBossAttacking && <p className="boss-powers">{powerText}</p>}
            </div>
            <Player
                playerName="Hopeful Candidate"
                onAttack={handlePlayerAttack}
                onUseSkill={handleUseSkill}
                health={playerHealth}
                charm={charm}
                lockButton={lockButton}
                charmSkills={charmSkills}
                selectedSkill={selectedSkill}
                setSelectedSkill={setSelectedSkill}
            />
        </>
    );
};

export default RecruiterLevel;