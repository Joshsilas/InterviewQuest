import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IntroToCto = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/CtoLevel/");
        }, 10000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <p>You Passed the first stage</p>
            <p>Your now a strong candidate</p>
            <p>Your now having a technical interview, time to change up your charm</p>
            <p>Engagement plus 5</p>
            <p>Confidence plus 20</p>
            <p>Charm plus 20</p>

        </div>
    );
};

export default IntroToCto;