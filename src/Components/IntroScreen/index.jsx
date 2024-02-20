import React from 'react';
import Button from '../Button/index.jsx';
import { useNavigate } from 'react-router-dom';
import './IntroScreen.css';

const IntroScreen = () => {
    const navigate = useNavigate();

    const begin = () => {
        navigate('/StoryPage/');
    };

    return (
        <div className="intro-screen">
            <h1>Job Hunt: The Game</h1>
            <div className="job-advertisement">
                <h2>Exciting Opportunity!</h2>
                <p>
                    <strong>Job Title:</strong> The Dream JOB you really want!
                </p>
                <p>
                    <strong>Company:</strong> Insert where application has been sent to here!
                </p>
                <p>
                    <strong>Requirements:</strong>
                </p>
                <p>Your now going to apply for your dream job!</p>
                <p> You will have to peak the interest of the Recruiter, The CTO and then finally the CEO!</p>
                <p> Your confidence is key and if you lose it that's it you have failed the interview. Use your charm to give you the edge.</p>
                   <p> Good Luck!</p>
                <Button onClick={begin} text={'Apply Now'} />
            </div>
        </div>
    );
};

export default IntroScreen;