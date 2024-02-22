import React, { useEffect, useState } from 'react';

const BossPowers = ({ onBossPowerUsed }) => {
    const powers = ['genericQuestion', 'yawn'];
    const [selectedPower, setSelectedPower] = useState(null);

    useEffect(() => {
        const randomPower = powers[Math.floor(Math.random() * powers.length)];
        setSelectedPower(randomPower);
        onBossPowerUsed(randomPower);
    }, [onBossPowerUsed]);

    return (
        <div>
        </div>
    );
};

export default BossPowers;