import React, { useState } from 'react';
import './boss.css';

const Boss1 = ({ bossInterest, onBossPowerUsed }) => {

    return (
        <div>
            <div className="bossHealth">
                <p>Recruiter Interest: {bossInterest}</p>
            </div>
            <div className="bossman"></div>

        </div>
    );
};

export default Boss1;