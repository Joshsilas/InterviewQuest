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
            <p>Your now a strong canidate</p>
            <p>Confidence plus 10</p>
            <p>Charm plus 10</p>
        </div>
    );
};

export default IntroToCto;