import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AcceptanceLetter = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
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
                    <span>Date: A day of Victory!</span>
                </div>
                <div className="email-content">
                    <p>Dear the Chosen Candidate!</p>
                    <p>Congratulations!</p>
                    <p>The Job is yours!</p>
                    <p>We are excited to invite you to join us at InterviewQuest Corp!</p>
                    <p>I hope you enjoyed the process.</p>
                    <p>I commend your resilience</p>
                    <p>Your confidence is now full to the brim.</p>
                    <p>Your charm is now a top talent.</p>
                    <p>You have Piqued our interest.</p>
                    <p>Kindest regards</p>
                    <p>The CEO</p>
                    {loading && <div className="loading-bar"></div>}
                </div>
            </div>
        </div>
    );
};

export default AcceptanceLetter;