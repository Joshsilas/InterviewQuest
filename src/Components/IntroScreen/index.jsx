import React from 'react';
import Button from '../Button/index.jsx';
import { useNavigate } from 'react-router-dom';
import './IntroScreen.css';

const IntroScreen = () => {
    const navigate = useNavigate();

    const begin = () => {
        navigate('/StoryPage/');
    };

    const realLife = () => {
        navigate('/failedInterview/');
    }
    return (
        <div className="intro-screen">
            <h1>Interview Quest</h1>
            <div className="job-advertisement">
                <h2>Exciting Opportunity!</h2>
                <p>
                    <strong>Job Title:</strong> The Dream JOB you really want!
                </p>
                <p>
                    <strong>Company:</strong> InterviewQuest Corp.
                </p>
                <p>
                    <strong>Requirements:</strong>
                </p>
                <p>Embark on a thrilling journey as you apply for your dream job and navigate through the interview stages in an old-school turn-based RPG.</p>
                <p>There are three stages of interviews to get the job. </p>
                <p>Engage with the hirers to pique their interests.</p>
                <p>Your confidence is your life-line and if you lose it that is it you have failed the interview.</p>
                <p>Your charm is your special abilities, utilise them well as you only have so much. Sometimes using all your charm at once will leave you vulnerable.</p>
                <p>Good Luck Hopeful Candidate!</p>
                <div className="ButtonPlace">
                <Button className="introbutton" onClick={begin} text={'Apply Now'} />
                <Button className="introbutton" onClick={realLife} text={'Real Life Mode'} />
                </div>
                <p>* Real life mode is intended as a joke, but for anyone who is currently job hunting, this is for you!</p>
                <strong>Please send any emails regarding this position to: Josh</strong>
            </div>
        </div>
    );
};

export default IntroScreen;