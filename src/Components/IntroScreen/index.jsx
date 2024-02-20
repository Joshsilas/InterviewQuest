import React from 'react';
import Button from "../Button/index.jsx";
import {useNavigate} from "react-router-dom";

const IntroScreen = ( ) => {
    const navigate = useNavigate();

    const begin = () => {
        navigate("/StoryPage/")
    }

    return (
        <div>
            <h1>JOB HUNT</h1>
                <p>The Game</p>
            <Button onClick={begin} text={"Apply Now"}/>
        </div>
    );
};

export default IntroScreen;