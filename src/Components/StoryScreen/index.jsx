import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StoryScreen.css';
import Button from "../Button/index.jsx";

const StoryScreen = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/recruiterLevel/");
        }, 20000);

        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 20000);

        return () => {
            clearTimeout(timer);
            clearTimeout(loadingTimer);
        };
    }, [navigate]);

    const continueOnClick = () => {
        navigate("/recruiterLevel/");
    }

    return (
        <div className="container">
            <div className="StoryScreen">
                <div className="email-header">
                    <span>From: InterviewQuest Corp</span>
                    <span>Date: A day of Hope!</span>
                </div>
                <div className="email-content">
                    <p>Dear Hopeful Candidate,</p>
                    <p>We are excited to invite you to the first stage interview at InterviewQuest Corp!</p>
                    <p>You will be interviewing with THE RECRUITER!</p>
                    <p>Your engagement power is 10.</p>
                    <p>Your confidence is 10.</p>
                    <p>Your charm is 10.</p>
                    <p>Pique their interest to 100 to proceed to the second round.</p>
                    <p>Kind regards</p>
                    <p>The CEO</p>
                    {loading && <div className="loading-bar"></div>}
                </div>
                <div className="skipButtonlayout">
                <Button className="skipButton" onClick={continueOnClick} text={'Continue'} />
                </div>
            </div>
        </div>
    );
};

export default StoryScreen;