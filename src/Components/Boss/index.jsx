import React from 'react';
import PropTypes from 'prop-types';
import './boss.css';

const Boss = ({ bossInterest, bossName, maxInterest }) => {
    const fillStyle = {
        width: `${(bossInterest / maxInterest) * 100}%`,
    };

    return (
        <div className="BossLayout">
            <div className="bossContainer">
                <div className="bossHealth">
                    <p className="interestText">{bossName} {bossInterest}</p>
                    <div className="healthFill" style={fillStyle}></div>
                </div>
            </div>
        </div>
    );
};

Boss.propTypes = {
    bossInterest: PropTypes.number.isRequired,
    bossName: PropTypes.string.isRequired,
    maxInterest: PropTypes.number.isRequired,
};

export default Boss;