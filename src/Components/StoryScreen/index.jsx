import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StoryScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/boss1');
        }, 10000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <p>You've applied for a job</p>
            <p>Lets get a job</p>
        </div>
    );
};

export default StoryScreen;