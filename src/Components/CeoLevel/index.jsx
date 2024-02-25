import React, { useEffect, useState } from 'react';
import Player from "../Player/index.jsx";
import Boss from "../Boss/index.jsx";
import './CeoLevel.css';
import {useNavigate} from "react-router-dom";
import soundClip from '/src/assets/ceomusic.mp3';

const CeoLevel = () => {
    const navigate = useNavigate();
    const [bossInterest, setBossInterest] = useState(0);
    const [playerHealth, setPlayerHealth] = useState(50);
    const [charm, setCharm] = useState(50);
    const [isBossAttacking, setIsBossAttacking] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedPower, setSelectedPower] = useState(null);
    const [powerText, setPowerText] = useState("");
    const [lockButton, setLockedButton] = useState(false)
    const charmSkills = [
        { name: 'You Speak from experience - 3 Charm', description: 'All these interviews, you know the answer. Raise interest by 40' },
        { name: 'Candidate of Destiny - 30 Charm', description: "As the Candidate of Destiny, you impress the CEO, restoring 25 confidence, raise interest by 150, and leaving a lasting positive impression." },
        { name: 'Visionary Leadership  - 5 charm', description: 'Showcase visionary leadership skills that steer the company toward unparalleled success. Raise interest by 60' },
        { name: 'Boost your confidence - 3 charm', description: 'Boost your confidence and leave a lasting impression. Heal your confidence 20' },
    ];
    const powers = ['stares into your soul', 'looks you up and down', "interrupts you", 'expresses doubt about your qualifications', 'almost smiles', 'interrupts the interview to take a phone call', "tries to wrap up the interview early"];
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
        if (bossInterest >= 500) {
            stopSound();
            goodInterview();
        }
    }, [playerHealth, bossInterest]);

    const handlePlayerAttack = () => {
        setBossInterest((prevInterest) => Math.min(500, prevInterest + 20));
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
            case 'You Speak from experience - 3 Charm':
                if (charm >= 3) {
                    setLockedButton(true)
                    setCharm((prevCharm) => Math.max(0, prevCharm - 3));
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
            case 'Candidate of Destiny - 30 Charm':
                if (charm >= 30) {
                    setLockedButton(true)
                    setCharm((prevCharm) => Math.max(0, prevCharm - 30));
                    setBossInterest((prevInterest) => Math.min(500, prevInterest + 150));
                    setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 25));
                } else {
                    setIsBossAttacking(false);
                    setErrorMessage('Not enough charm to use this skill!');
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 1000)
                    return;
                }
                break;
            case 'Visionary Leadership  - 5 charm':
                if (charm >= 5) {
                    setLockedButton(true)
                    setCharm((prevCharm) => Math.max(0, prevCharm - 5));
                    setBossInterest((prevInterest) => Math.min(500, prevInterest + 60));
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
                    setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 20));
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
            case 'stares into your soul':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 10));
                setPowerText("You've lost 10 confidence");
                break;
            case 'looks you up and down':
                if (charm <= 0) {
                    setPowerText("The boss refrains from judging you!");
                    break;
                }
                setCharm((prevCharm) => Math.max(0, prevCharm - 5));
                setPowerText("You've lost 5 charm");
                break;
            case "interrupts you" :
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 6));
                setPowerText("You've lost 6 confidence");
                break;
            case 'expresses doubt about your qualifications':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 12));
                setPowerText("You've lost 12 confidence");
                break;
            case 'almost smiles':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth + 1));
                setPowerText("You've gained 1 confidence");
                break;
            case 'interrupts the interview to take a phone call':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 8));
                setPowerText("You've lost 8 confidence");
                break;
            case 'tries to wrap up the interview early':
                setPlayerHealth((prevHealth) => Math.max(0, prevHealth - 15));
                setPowerText("You've lost 15 confidence");
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
            navigate("/AcceptanceLetter/");
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
        <div className="CeoLevelBody">
            <Boss bossName={"CEO Interest:"} bossInterest={bossInterest} maxInterest={500} />
            <div className="recruiterLevel">
                <img className="CeobossImage" src="/ceo.jpg" alt="CEO" />
            </div>
            <div className="boss-powers-layout">
                {isBossAttacking ? null : <p className="boss-powers-waiting">The CEO is judging you...</p>}
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
                lockButton={lockButton}
                charmSkills={charmSkills}
                selectedSkill={selectedSkill}
                setSelectedSkill={setSelectedSkill}
            />
        </div>
    );
};

export default CeoLevel;