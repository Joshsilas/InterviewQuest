import React, { useState } from 'react';
import Player from "../Player/index.jsx";
import './boss.css';

const Boss1 = () => {
    const [bossHealth, setBossHealth] = useState(100); // Initial boss health

    return (
        <div>
            <div className="boss1health">
                <p>Boss Health: {bossHealth}</p>
            </div>
            <div className="bossman"></div>
        </div>
    );
};

export default Boss1;