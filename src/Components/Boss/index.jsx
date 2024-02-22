import React, { useState } from 'react';
import './boss.css';

const Boss = ({ bossInterest, onBossPowerUsed }) => {
    // const healthBarWidth = `${bossInterest}%`;

    // const healthBarStyle = {
    //     backgroundColor: '#ff3333',
    //     width: healthBarWidth,
    //     padding: '10px',
    //     border: '2px solid #990000',
    //     borderRadius: '5px',
    //     color: '#fff',
    //     fontFamily: 'Courier New, monospace'
    // };

    return (
        <div>
            <div className="bossHealth" >
                <p>Recruiter Interest: {bossInterest}</p>
            </div>
            <div className="bossman"></div>

        </div>
    );
};

export default Boss;