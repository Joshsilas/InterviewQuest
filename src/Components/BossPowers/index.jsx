import React, { useEffect, useState } from 'react';

const BossPowers = ({ onBossPowerUsed }) => {
    const powers = ['generic Question', 'yawn'];
    const [selectedPower, setSelectedPower] = useState(null);

    useEffect(() => {
        const randomPower = powers[Math.floor(Math.random() * powers.length)];
        setSelectedPower(randomPower);
        onBossPowerUsed(randomPower);
    }, []);

    return (
        <div>
            <p>Boss is using: {selectedPower}</p>
        </div>
    );
};

export default BossPowers;