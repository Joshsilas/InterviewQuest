import React, { useState } from 'react';
import BossPowers from '../BossPowers/index.jsx';
import './boss.css';

const Boss1 = ({ bossInterest, onBossPowerUsed }) => {

    return (
        <div>
            <div className="boss1health">
                <p>Recruiter Interest: {bossInterest}</p>
            </div>
            <div className="bossman"></div>

        </div>
    );
};

export default Boss1;