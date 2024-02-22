import React from 'react';
import './boss.css';

const Boss = ({ bossInterest, bossName  }) => {
    const fillStyle = {
        width: `${bossInterest}%`,
    };

    return (
        <div className="BossLayout">
            <div className="bossContainer">
                <div className="bossHealth">
                    <p className="interestText"> {bossName} {bossInterest}</p>
                    <div className="healthFill" style={fillStyle}> </div>
                </div>
                <div className="bossman"></div>
            </div>
        </div>
    );
};

export default Boss;