import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const IntroToCeo = () => {
        const navigate = useNavigate();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                navigate("/CeoLevel/");
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
                        <span>Date: A day of Destiny!</span>
                    </div>
                    <div className="email-content">
                        <p>Dear Candidate of Destiny,</p>
                        <p>Congratulations again, Level Up!</p>
                        <p>I am excited to invite you to the Final stage interview at InterviewQuest Corp!</p>
                        <p>You will be interviewing with me!</p>
                        <p>Your engagement power is now 20.</p>
                        <p>Your confidence is now 50.</p>
                        <p>Your charm is now 50.</p>
                        <p>Pique my interest to 500 and the job is yours.</p>
                        <p>See you soon...</p>
                        <p>The CEO</p>
                        {loading && <div className="loading-bar"></div>}
                    </div>
                </div>
            </div>
        );
}

export default IntroToCeo;