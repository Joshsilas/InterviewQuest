import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const IntroToCto = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/CtoLevel/");
        }, 20000);

        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 20000);

        return () => {
            clearTimeout(timer);
            clearTimeout(loadingTimer);
        };
    }, [navigate]);

    return (
        <div className="container">
            <div className="StoryScreen">
                <div className="email-header">
                    <span>From: InterviewQuest Corp</span>
                    <span>Date: A Strong day!</span>
                </div>
                <div className="email-content">
                    <p>Dear Strong Candidate,</p>
                    <p>Congratulations, Level Up!</p>
                    <p>We are excited to invite you to the second stage interview at InterviewQuest Corp!</p>
                    <p>You will be interviewing with THE CTO!</p>
                    <p>Your engagement power is now 15.</p>
                    <p>Your confidence is now 30.</p>
                    <p>Your charm is now 30.</p>
                    <p>Pique their interest to 300 to proceed to the final round.</p>
                    <p>Kind regards</p>
                    <p>The CEO</p>
                    {loading && <div className="loading-bar"></div>}
                </div>
            </div>
        </div>
    );
};

export default IntroToCto;