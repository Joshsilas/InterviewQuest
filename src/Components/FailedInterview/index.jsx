import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StoryScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 10000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <p>We regret to inform you</p>
        </div>
    );
};

export default StoryScreen;