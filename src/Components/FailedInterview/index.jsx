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
                    <span>Date: A bad day!</span>
                </div>
                <div className="email-content">
                    <p>Dear no longer a Candidate!</p>
                    <p>We regret to inform you that your application has not been successful.</p>
                    <p>Although we appreciate your efforts throughout the interview process, we have chosen to move forward with other candidates.</p>
                    <p>We wish you the best in your future endeavors and thank you for your interest in InterviewQuest Corp.</p>
                    <p>Regards</p>
                    <p>The CEO</p>
                    {loading && <div className="loading-bar"></div>}
                </div>
            </div>
        </div>
    );
};

export default AcceptanceLetter;